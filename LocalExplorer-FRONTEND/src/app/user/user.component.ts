import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Propostion } from '../proposition';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{

  location!:any;
  weatherData!:any;
  user: User = new User();
  propostionGPT!: any;
  props:Propostion[];
  test!:any[];
  temp:any;

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.getWeatherAccordingToUserLocation();
  }
  getWeatherAccordingToUserLocation(){
    this.userService.getLocation().subscribe((response)=>{

      this.location=response;
      this.weatherData=this.getWeather();
      this.userService.getWeatherConditions(this.location.city)
    .subscribe(data=>{
      this.propostionGPT=data;

    })


    });
  }
  saveUser(){
    this.userService.createUser(this.user).
    subscribe( data =>{
      this.router.navigate(['propositions',data]);

    },
    error => console.log(error));

  }

  getWeather(){

    this.userService.getWeather(this.location.city)
    .subscribe(data=>{
      this.weatherData=data;
    })
  }

  onSubmit(){
    //this.getWeatherAccordingToUserLocation();
    this.user.weather=this.weatherData.weather[0].description;
    this.user.location=this.location.city;
    this.user.propositionGPT=this.propostionGPT.result.choices[0].message.content;
    this.user.propositions=this.props;
    console.log(this.location);
    console.log(this.propostionGPT);
    this.saveUser();
  }


}
