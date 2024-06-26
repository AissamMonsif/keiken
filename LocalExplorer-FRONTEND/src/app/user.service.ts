import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, mergeMap, switchMap, tap, throwError, timer } from 'rxjs';
import { User } from './user';
import { Propostion } from './proposition';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiKey='c9d52345786a3025b21e9a909903c776';

  private baseUrl = environment.apiUrl;

  messages=[{role:"system", content:"You are a helpful assistant."}];
  result: Object;

  constructor(private httpClient: HttpClient) { }


  getLocation(): Observable<any> {
    return this.httpClient.get(`https://ipapi.co/json`).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 429) {
          return this.handleRateLimitError();
        }
        return throwError(error);
      })
    );
  }

  private handleRateLimitError(): Observable<any> {
    return timer(1000).pipe(
      mergeMap(() => this.getLocation()),
      catchError((error: any) => throwError(error))
    );
  }


  getWeather(city:string){
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=`+city+`&appid=`+this.apiKey);
  }

  getWeatherConditions(city: string): Observable<any> {

    const key = 'c9d52345786a3025b21e9a909903c776';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

    return this.httpClient.get(apiUrl).pipe(
      switchMap((data: any) => {
        const conditions = `Donnes moi cinq activités à faire dans ces conditions:${data.weather[0].description},
                                  dans la ville ${city}, en dix mots tout au plus.`;

        console.log(data);
        this.messages.push({ role: 'user', content: conditions });
        return this.handle().pipe(
          map((result) => {
             return { data, result };
          })
        );
      })
    );
  }

  handle(): Observable<any> {
    let url = 'https://api.openai.com/v1/chat/completions';
    let httpHeaders = new HttpHeaders().set("Authorization", "Bearer YOUR_API_KEY");
    let payload = {
      model: "gpt-3.5-turbo",
      messages: this.messages
    };

    return this.httpClient.post(url, payload, { headers: httpHeaders }) .pipe(
      tap((resp) => {
        this.result = resp;
      })
    );
  }

  getUsersList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseUrl}/users`);
  }

  createUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/users`, user);
  }
  getUserById(id: number): Observable<User>{
    return this.httpClient.get<User>(`${this.baseUrl}/users/${id}`);
  }

}
