import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    RouterLink,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  userData: any = {};

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.userForm = new FormGroup({

      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const formValues = this.userForm.getRawValue();
      Object.assign(this.userData, formValues);
      console.log('User Data:', this.userData);
    }
  }

  login(): void {
    localStorage.setItem('token', '123456');
    this.router.navigate(['']).then();
  }
}
