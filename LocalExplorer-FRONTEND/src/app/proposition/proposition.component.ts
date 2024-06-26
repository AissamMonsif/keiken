import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Propostion } from '../proposition';
import { PropositionService } from '../proposition.service';

@Component({
  selector: 'app-proposition',
  templateUrl: './proposition.component.html',
  styleUrl: './proposition.component.css'
})
export class PropositionComponent implements OnInit{
  id: number;
  user: any;
  propositions:any[];

  constructor(private route: ActivatedRoute,
    private propositionsService: PropositionService,private userService:UserService) { }

  private getPropositions(){
    this.id = this.route.snapshot.params['id'];
    this.user=this.userService.getUserById(this.id);
    this.propositionsService.getPropositionsListByUserId(this.id).subscribe(data => {
      console.log(data);
      this.propositions = data;
    });
  }

  ngOnInit(): void {
    this.getPropositions();
  }


}
