import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  firstName: String=""
  email:String=""
  password:String=""

  printData(){
    console.log(this.firstName)  
    console.log(this.email);
    console.log(this.password);

} 
}