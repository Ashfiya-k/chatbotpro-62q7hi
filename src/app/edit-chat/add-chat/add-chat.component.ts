import { Component, OnInit } from '@angular/core';


import{FormBuilder,FormArray, FormGroup} from '@angular/forms';
import { map } from 'rxjs/operators';
import { ChatService } from '../../chatbot/chat.service';
import { Post } from '../../post.model';


 

@Component({
  selector: 'app-add-chat',
  templateUrl: './add-chat.component.html',
  styleUrls: ['./add-chat.component.css']
})
export class AddChatComponent implements OnInit {


converse:Post;
  constructor( private fb:FormBuilder,private chatService:ChatService) { }

    chatForm= this.fb.group({

      category:[''],
      answer:[''],
      question:this.fb.array([
        this.fb.control('')
      ])
   }); 
    


get question() : FormArray {
  return this.chatForm.get("question") as FormArray;
}


   onAddQues(){
     this.question.push(this.fb.control(''));
    
   }
   onSubmit() {
  this.converse={
    category:this.chatForm.get('category').value,
    question:this.chatForm.get('question').value,
    answer:this.chatForm.get('answer').value

  }
  console.log(this.converse);
  

   
   console.log(this.chatForm.value);
   
   
  
 }





 
  ngOnInit() {
 }
   
} 
