import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from './login.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

  }
  getLogin(): void {
    this.loginService.login(this.formGroup.value).subscribe(res => {
      console.log(res)
       localStorage.setItem('token',res.token)
      this.router.navigate(['/dashboard', {}]);

    })

  }
}
