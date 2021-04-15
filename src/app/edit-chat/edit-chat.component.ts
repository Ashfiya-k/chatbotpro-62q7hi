import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chatbot/chat.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-edit-chat',
  templateUrl: './edit-chat.component.html',
  styleUrls: ['./edit-chat.component.css']
})
export class EditChatComponent implements OnInit {

   categories:string[];



  constructor(private chatService:ChatService) { }
converse:Post;

  ngOnInit() {
    
       this.categories=this.chatService.getCategory();
         console.log("Done");
         
      this.converse=this.chatService.updateChat(this.categories[0]);
      console.log(this.converse);
      
     }
     onCategorySelect(event:Event){
       
      this.converse= this.chatService.updateChat((<HTMLInputElement>event.target).value);
      console.log(this.converse);
  
    
       console.log("Done");
     }
     onAddRow(){
       
     }
  }
   

