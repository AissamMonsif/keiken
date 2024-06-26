import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Propostion } from './proposition';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropositionService {

  private baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getPropositionsList(): Observable<Propostion[]>{
    return this.httpClient.get<Propostion[]>(`${this.baseUrl}/propositions`);
  }
  getPropositionsListByUserId(id:number):Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/propositions/${id}`);
  }
}
