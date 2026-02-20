import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent {
 firstName: string = "Tom";
 lastName = "David";
 age: number = 18;
 isActive: boolean = true;
 currentDate: Date = new Date();
 inputType:string = "radio";
 gender:string = '';

 showWelcomeAlert(){  
alert("Welcome!!!")
 }
 showMessage(message: string){  // function with parameter
  alert(message)
 }
}
