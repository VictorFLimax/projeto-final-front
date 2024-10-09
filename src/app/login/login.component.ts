import {Component, OnInit} from '@angular/core';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatCard, MatCardModule} from '@angular/material/card';
import {Router, RouterLink} from '@angular/router';
import {FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  userData: any = {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      senha : new FormControl('',[Validators.required,])
  });

  }
  onSubmit(){
    if(this.userForm.valid){
      const formValues = this.userForm.getRawValue();
      Object.assign(this.userData, formValues);
      console.log('User Data:', this.userData);
    }
  }
  constructor(private router: Router) {
  }

  login() {
    localStorage.setItem('token', '123456');
    this.router.navigate(['']).then();
  }

}
