import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChatService } from '../../chatbot/chat.service';

@Component({
  selector: 'app-edits',
  templateUrl: './edits.component.html',
  styleUrls: ['./edits.component.css']
})
export class EditsComponent implements OnInit {

   constructor(private route:ActivatedRoute,private chatService:ChatService) { }
   id:string;
   paramsSubscribe: Subscription;

  ngOnInit() {
     this.id= this.route.snapshot.params['id'];

     this.paramsSubscribe= this.route.params.subscribe(
     (params:Params) => {
     this.id=params['id'];
    
    });
  }
    onDestroy(){
       this.paramsSubscribe.unsubscribe();
     }

}