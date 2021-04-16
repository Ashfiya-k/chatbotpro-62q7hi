import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormArray, FormGroup} from '@angular/forms';

import { ChatService } from '../../chatbot/chat.service';
import { Post } from '../../post.model';

@Component({
  selector: 'app-update-chat',
  templateUrl: './update-chat.component.html',
  styleUrls: ['./update-chat.component.css']
})
export class UpdateChatComponent implements OnInit {


categories:string[];
  converse:Post;



  constructor(private chatService:ChatService,private fb:FormBuilder) { }

   ngOnInit() {
  this.categories=this.chatService.getCategory();
  
  this.converse= this.chatService.updateChat(this.categories[0]);
    

  

  }


  updateForm=this.fb.group({
  category:this.fb.control(''),
                                                                                            
   ques:this.fb.array([
     this.fb.control('')
    
   ]),
   answer:this.fb.control('')
});
      
  

  get ques() : FormArray {
  return this.updateForm.get("ques") as FormArray;
}

 getQuestion(){
    for(let x in this.converse.question.values)
    {
      const n=this.fb.control(x);
      console.log(x);
      console.log(n.value);
      this.ques.push(n.value);
    }

  }


   onAddQues(){
     this.ques.push(this.fb.control(''));
    
   }
   onSubmit(){
     this.getQuestion();
     console.log(this.updateForm.value);
   }
   


 



     onCategorySelect(event:Event){
      
      this.converse= this.chatService.updateChat((<HTMLInputElement>event.target).value);
      console.log(this.converse);
    
    
       console.log("Done");
     }

}