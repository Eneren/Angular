import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordConfirmation } from '../shared/customValidators.directive';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  signupForm!: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{8,64}$")
      ]),
      passwordConfirm: new FormControl('', [
        Validators.required
      ]),
      name: new FormControl('', [
        Validators.required
      ]),
      surname: new FormControl('', [
        Validators.required
      ]),
      termsOfUse: new FormControl('',
        {
          updateOn: 'change',
          validators: [
            Validators.required
          ]
        })
    }, {
      validators: [passwordConfirmation()],
      updateOn: 'blur'
    })
  }

  submit(){
    alert(`User with email ${this.signupForm.get('email')?.value} was successfully signed up`)
  }
  
  get formErrors() { return this.signupForm.errors; }

  get email() { return this.signupForm.get('email')!; }

  get password() { return this.signupForm.get('password')!; }

  get passwordConfirm() { return this.signupForm.get('passwordConfirm')!; }

  get name() { return this.signupForm.get('name')!; }

  get surname() { return this.signupForm.get('surname')!; }

  get termsOfUse() { return this.signupForm.get('termsOfUse')!; }

  constructor() { }
}