import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyserviceService } from '../services/myservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private service:MyserviceService) { }
  myform=new FormGroup({
    username:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    userpass:new FormControl('',[Validators.required,Validators.minLength(3)])
  })
  
  
  ngOnInit(): void {
  }
  onLogin(){
    console.log(this.myform.value);
    this.service.Login(this.myform.value).subscribe((e:any)=>{
      console.log(e);
      
    })
  }
  get username(){
    return this.myform.get('username');
  }
  get userpass(){
    return this.myform.get('userpass');
  }


}
