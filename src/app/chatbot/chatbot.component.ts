import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  constructor(private chatService:ChatService) { }
  sendText=[];
  @ViewChild('msgBox') x: ElementRef;  
scrolltop: number = null;
 
   status=false;
   reply:{category:string,question:string[],answer:string};
  colorStatus:boolean;

  

  ngOnInit() {
    
    
  }
  onSend(txt){
     if(txt.value === "")
     {
       this.status=true;
     }
     else{
  
    this.sendText.push(txt.value);
      this.scrolltop = this.x.nativeElement.scrollHeight+100;
  
        
        setTimeout(()=>{
 this.reply=this.chatService.getReply(txt.value.toLowerCase());
       
      if(this.reply !== undefined)
      {
          this.sendText.push(this.reply.answer);
          this.scrolltop = this.x.nativeElement.scrollHeight+100;
      }   
      else{
   
      this.sendText.push("Sorry I did not Understand.");
      this.scrolltop = this.x.nativeElement.scrollHeight+100;
      console.log("in reply method" );
        
      }
    txt.value='';

     
        },2000);
    
  }
  }
   


 
        
    
    
    
   
     
     }
