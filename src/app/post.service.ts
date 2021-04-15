import { Injectable } from '@angular/core';
import {Post} from './post.model';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { AngularFireDatabase} from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class PostService {

 
   constructor( private http:HttpClient,private db:AngularFirestore){}
  

  
   fetchData()
   {
     return this.http.get<{[key:string]:Post}>('https://chatbot-47543-default-rtdb.firebaseio.com/posts.json').pipe(map(responseData=> //map((responseData:{[key:string]:Post}
    {
       const postArray:Post[]=[];
       for( const key in responseData)//manually looping through the data to convet it into an array
       {
         if(responseData.hasOwnProperty(key))// wrap this with an if statement if you're using a for/in loop where you check if response data has key as its own property so that you're not trying to access the property of some prototype
       
         {
         postArray.push({...responseData[key],id:key});//adding new property to the array
       }
    }
     return postArray;
    }
    ));
   

   }





}
























 // createAndStorePost(category:string,ques:string[],ans:string)
  //  {
     
  //    const postData:Post={category:category,question:ques,answer:ans};
  //  //send Http request it take json data the angullar convert the object into json data
  //   this.http.post<{name:string}>('https://chatbot-47543-default-rtdb.firebaseio.com/posts.json',postData).subscribe(responseData=> console.log(responseData));// post returns an observable
  //   conso