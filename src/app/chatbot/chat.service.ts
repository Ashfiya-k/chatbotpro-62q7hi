import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Injectable()
export class ChatService {

  constructor(private postservice:PostService) { }

     subscription:Subscription;
        conversation:Post[];

     getData(){
  this.subscription=this.postservice.fetchData().subscribe((data)=>{
      this.conversation=data;
      }
   );
   console.log("getData of chatService is called");

     }
      


     getReply(ques:string)
     {
       const converse=this.conversation.find((s)=> {
         return s.question.find((k)=>{
         return k === ques;});
         });
       return converse;

     }

     getCategory(){
       const cats:string[]=[];
  
     this.conversation.forEach((s)=>{
      
       cats.push(s.category);
  
     });
      return cats;  
    
     }
     updateChat(c:string){
        const converse=this.conversation.find((s)=> {
         return s.category === c;
        });
        console.log(converse);
       return converse;

     }

 

}