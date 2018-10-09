import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  logg(value)
{
const username=value.inputEmail;
const password=value.inputPass;
console.log(username);
console.log(password);
if(username=='admin' && password=='admin')
{
this.router.navigateByUrl('/overview');
}
else{
console.log("unable to logn")
}
}

  ngOnInit() {
  }

}
