 import { Component, VERSION } from '@angular/core';
import { ChatService } from './chatbot/chat.service';
import { PostService } from './post.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
    constructor(private postservice:PostService,private chatService:ChatService){}

  ngOnInit(){
    this.chatService.getData();
    

  }
}
