import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import{ ChatbotComponent} from './chatbot/chatbot.component';
import {MenuComponent} from './menu/menu.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EditChatComponent } from "./edit-chat/edit-chat.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
   { path:'',component:HomeComponent},
  { path: "home", component: HomeComponent },
    { path:"menu",component:MenuComponent},
    { path:"contacts",component:ContactsComponent},
     { path:"aboutus",component:AboutusComponent},
     { path:"editchat",component:EditChatComponent},
     { path:"log",component:LoginComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
