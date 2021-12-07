import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignUpFormComponent } from './sign-up-form.component';

describe('SignUpFormComponent', () => {
  let component: SignUpFormComponent;
  let fixture: ComponentFixture<SignUpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpFormComponent ],
      imports: [FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create signup form', () => {
    expect(component).toBeTruthy();
  });
  
  it('signup formGroup has the same amount of elements as in HTML form', ()=> {
    const formElement = fixture.debugElement.nativeElement.querySelector('#inner-form');
    const inputElements = formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(Object.keys(component.signupForm.value).length);
  })

  it('check if reactive form fields are initialized', () => {
    const signupFormGroup = component.signupForm;
    const signupFormValues = {
      email: '',
      password: '',
      passwordConfirm: '',
      name: '',
      surname: '',
      termsOfUse: '',
    }
    expect(signupFormGroup.value).toEqual(signupFormValues);
  })

  it('check if email field from formControl binds with html view', () => {

    const signupFormEmail: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#email');
    signupFormEmail.value = 'as@a.com';
    signupFormEmail.dispatchEvent(new Event('input'));
    signupFormEmail.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const signupFormEmailFromGroup = component.signupForm.get('email');
      expect(signupFormEmail.value).toEqual(signupFormEmailFromGroup!.value);
      expect(signupFormEmailFromGroup!.errors).toBeNull();
    })
    expect(null).toBeNull();
  });

  it('empty email must show that this field is required', () => {

    const signupFormEmail: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#email');
    signupFormEmail.value = '';
    signupFormEmail.dispatchEvent(new Event('input'));
    signupFormEmail.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const signupFormEmailFromGroup = component.signupForm.get('email');
      expect(signupFormEmail.value).toEqual(signupFormEmailFromGroup!.value);
      expect(signupFormEmailFromGroup!.errors).not.toBeNull();
      const emailError: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#email-required');
      expect(emailError).not.toBeNull();
      expect(emailError.textContent).toContain('Email is required')
    })
    expect(null).toBeNull();
  });

  it('invalid email must show apropriate message', () => {
    const signupFormEmail: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#email');
    signupFormEmail.value = 'as@a.';
    signupFormEmail.dispatchEvent(new Event('input'));
    signupFormEmail.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const signupFormEmailFromGroup = component.signupForm.get('email');
      expect(signupFormEmail.value).toEqual(signupFormEmailFromGroup!.value);
      expect(signupFormEmailFromGroup!.errors).not.toBeNull();
      const emailError: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#email-invalid');
      expect(emailError).not.toBeNull();
      expect(emailError.textContent).toContain('я сказал нельзя')
    })
    expect(null).toBeNull();
  });

  it('check if password field from formControl binds with html view', () => {

    const signupFormPassword: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#password');
    signupFormPassword.value = '1234Aa____';
    signupFormPassword.dispatchEvent(new Event('input'));
    signupFormPassword.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const signupFOrmPasswordFromGroup = component.signupForm.get('password');
      expect(signupFormPassword.value).toEqual(signupFOrmPasswordFromGroup!.value);
      expect(signupFOrmPasswordFromGroup!.errors).toBeNull();
    })
    expect(null).toBeNull();
  });

  it('empty password must show that this field is required', () => {

    const signupFormPassword: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#password');
    signupFormPassword.value = '';
    signupFormPassword.dispatchEvent(new Event('input'));
    signupFormPassword.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const signupFOrmPasswordFromGroup = component.signupForm.get('password');
      expect(signupFormPassword.value).toEqual(signupFOrmPasswordFromGroup!.value);
      expect(signupFOrmPasswordFromGroup!.errors).not.toBeNull();
      const passwordError: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#password-required');
      expect(passwordError).not.toBeNull();
      expect(passwordError.textContent).toContain('Карта не считана.')
    })
    expect(null).toBeNull();
  });
  it('short password must show apropriate error message', () => {
    const signupFormPassword: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#password');
    signupFormPassword.value = 'pass';
    signupFormPassword.dispatchEvent(new Event('input'));
    signupFormPassword.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const signupFOrmPasswordFromGroup = component.signupForm.get('password');
      expect(signupFormPassword.value).toEqual(signupFOrmPasswordFromGroup!.value);
      expect(signupFOrmPasswordFromGroup!.errors).not.toBeNull();
      const passwordError: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#password-short');
      expect(passwordError).not.toBeNull();
      expect(passwordError.textContent).toContain('Пароль должен быть номером вашей карты')
    })
    expect(null).toBeNull();
  });
  it('show message when password doesn\'t have upper and lower letters, digits and special symbols', () => {
    const signupFormPassword: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#password');
    signupFormPassword.value = 'password1234';
    signupFormPassword.dispatchEvent(new Event('input'));
    signupFormPassword.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const signupFOrmPasswordFromGroup = component.signupForm.get('password');
      expect(signupFormPassword.value).toEqual(signupFOrmPasswordFromGroup!.value);
      expect(signupFOrmPasswordFromGroup!.errors).not.toBeNull();
      const passwordError: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#password-invalid');
      expect(passwordError).not.toBeNull();
      expect(passwordError.textContent).toContain('добавь нижнее подчеркивание, безопасность гарантирована: A, a, 1, _')
    }) 
    expect(null).toBeNull();
  });

  it('password Password1234_ must be valid', ()=> {
      
    const signupFormPasswordConfirm: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#password');
    signupFormPasswordConfirm.value = 'Password1234_';
    signupFormPasswordConfirm.dispatchEvent(new Event('input'));
    signupFormPasswordConfirm.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const signupFormPasswordConfirmFromGroup = component.signupForm.get('password');
      expect(signupFormPasswordConfirm.value).toEqual(signupFormPasswordConfirmFromGroup!.value);
      expect(signupFormPasswordConfirmFromGroup!.errors).toBeNull();
    })
    expect(null).toBeNull();
  })

  it('check if password confirmation field from formControl binds with html view', ()=> {
    const signupFormPasswordConfirm: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#passwordConfirm');
    const signupFormPassword: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#password');
    signupFormPassword.value = 'Password1234_'
    signupFormPassword.dispatchEvent(new Event('input'));
    signupFormPassword.dispatchEvent(new Event('blur'));
    signupFormPasswordConfirm.value = 'Password1234_';
    signupFormPasswordConfirm.dispatchEvent(new Event('input'));
    signupFormPasswordConfirm.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const signupFormPasswordConfirmFromGroup = component.signupForm.get('passwordConfirm');
      expect(signupFormPasswordConfirm.value).toEqual(signupFormPasswordConfirmFromGroup!.value);
      expect(signupFormPasswordConfirmFromGroup!.errors).toBeNull();
    })
  })
  it('empty password confirm must show that this field is required', ()=>{
    const signupFormPasswordConfirm: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#passwordConfirm');
    signupFormPasswordConfirm.value = '';
    signupFormPasswordConfirm.dispatchEvent(new Event('input'));
    signupFormPasswordConfirm.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const signupFormPasswordConfirmFromGroup = component.signupForm.get('passwordConfirm');
      expect(signupFormPasswordConfirm.value).toEqual(signupFormPasswordConfirmFromGroup!.value);
      expect(signupFormPasswordConfirmFromGroup!.errors).not.toBeNull();
      const emailError: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#password-confirm-required');
      expect(emailError).not.toBeNull();
      expect(emailError.textContent).toContain('Password confirmation is required')
    })
    expect(null).toBeNull();
  })

  it('Show message when password and password confirm don\'t match', ()=>{
    const signupFormPassword: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#password');
    signupFormPassword.value = 'Password1234___';
    signupFormPassword.dispatchEvent(new Event('input'));
    signupFormPassword.dispatchEvent(new Event('blur'));
    const signupFormPasswordConfirm: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#passwordConfirm');
    signupFormPasswordConfirm.value = 'password1234';
    signupFormPasswordConfirm.dispatchEvent(new Event('input'));
    signupFormPasswordConfirm.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const signupFormPasswordFromGroup = component.signupForm.get('password');
      const signupFormPasswordConfirmFromGroup = component.signupForm.get('passwordConfirm');
      expect(signupFormPasswordFromGroup!.value).not.toEqual(signupFormPasswordConfirmFromGroup!.value);
      expect(signupFormPasswordConfirmFromGroup!.errors).not.toBeNull();
      const passwordConfirmErrors: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#password-not-match');
      expect(passwordConfirmErrors).not.toBeNull();
      expect(passwordConfirmErrors.textContent).toContain('Passwords don\'t match')
    })
    expect(null).toBeNull();
  })

    it('check if name field from formControl binds with html view', () => {

    const signupFormName: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#name');
    signupFormName.value = 'some name';
    signupFormName.dispatchEvent(new Event('input'));
    signupFormName.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const signupFormNameFromGroup = component.signupForm.get('name');
      expect(signupFormName.value).toEqual(signupFormNameFromGroup!.value);
      expect(signupFormNameFromGroup!.errors).toBeNull();
    })
    expect(null).toBeNull();
  });

  it('empty name must show that this field is required', () => {

    const signupFormName: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#name');
    signupFormName.value = '';
    signupFormName.dispatchEvent(new Event('input'));
    signupFormName.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const signupFormNameFromGroup = component.signupForm.get('name');
      expect(signupFormName.value).toEqual(signupFormNameFromGroup!.value);
      expect(signupFormNameFromGroup!.errors).not.toBeNull();
      const nameError: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#name-required');
      expect(nameError).not.toBeNull();
      expect(nameError.textContent).toContain('опять не андрей.')
    })
    expect(null).toBeNull();
  });
  it('check if surname field from formControl binds with html view', () => {

    const signupFormSurname: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#surname');
    signupFormSurname.value = 'some surname';
    signupFormSurname.dispatchEvent(new Event('input'));
    signupFormSurname.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const signupFormSurnameFromGroup = component.signupForm.get('surname');
      expect(signupFormSurname.value).toEqual(signupFormSurnameFromGroup!.value); 
      expect(signupFormSurnameFromGroup!.errors).toBeNull();
    })
    expect(null).toBeNull();
  });

  it('empty surname must show that this field is required', () => {

    const signupFormSurname: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#surname');
    signupFormSurname.value = '';
    signupFormSurname.dispatchEvent(new Event('input'));
    signupFormSurname.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const signupFormSurnameFromGroup = component.signupForm.get('surname');
      expect(signupFormSurname.value).toEqual(signupFormSurnameFromGroup!.value);
      expect(signupFormSurnameFromGroup!.errors).not.toBeNull();
      const surnameError: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#surname-required');
      expect(surnameError).not.toBeNull();
      expect(surnameError.textContent).toContain('опять не балконский.')
    })
    expect(null).toBeNull();
  });
    it('check if termsOfUse field from formControl binds with html view', () => {

    const signupFormTerms: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#termsOfUse');
    signupFormTerms.click();
    signupFormTerms.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const signupFormTermsFromGroup = component.signupForm.get('termsOfUse');
      expect(signupFormTerms.value).toEqual('on');
      expect(signupFormTermsFromGroup!.errors).toBeNull();
    })
    expect(null).toBeNull();
  });

  it('terms of use must be checked to register', () => {

    const signupFormTerms: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#termsOfUse');
    signupFormTerms.click();
    signupFormTerms.click();
    signupFormTerms.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const signupFormTermsFromGroup = component.signupForm.get('termsOfUse');
      expect(signupFormTerms.value).toEqual('on');
      expect(signupFormTermsFromGroup!.errors).not.toBeNull();
      const termsError: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#termsOfUse-required');
      expect(termsError).not.toBeNull();
      expect(termsError.textContent).toContain('вам это надо.')
    })
    expect(null).toBeNull();
  });
  it('valid data must allow signup', ()=> {
    const signupFormButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#signup-button');
    expect(signupFormButton.disabled).toBeTruthy();
    const signupFormEmail: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#email'); 
    const signupFormPassword: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#password'); 
    const signupFormPasswordConfirm: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#passwordConfirm'); 
    const signupFormName: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#name'); 
    const signupFormSurname: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#surname'); 
    const signupFormTerms: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#termsOfUse'); 

    signupFormEmail.value = 'email@email.com';
    signupFormEmail.dispatchEvent(new Event('input'));
    signupFormEmail.dispatchEvent(new Event('blur'));
  
    signupFormPassword.value = 'Password1234___';
    signupFormPassword.dispatchEvent(new Event('input'));
    signupFormPassword.dispatchEvent(new Event('blur'));

    signupFormPasswordConfirm.value = 'Password1234___';
    signupFormPasswordConfirm.dispatchEvent(new Event('input'));
    signupFormPasswordConfirm.dispatchEvent(new Event('blur'));

    signupFormName.value = 'some name';
    signupFormName.dispatchEvent(new Event('input'));
    signupFormName.dispatchEvent(new Event('blur'));

    signupFormSurname.value = 'some surname';
    signupFormSurname.dispatchEvent(new Event('input'));
    signupFormSurname.dispatchEvent(new Event('blur'));

    signupFormTerms.click();
    signupFormTerms.dispatchEvent(new Event('blur'));

    
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      expect(component.signupForm.get('email')!.errors).toBeNull();
      expect(component.signupForm.get('password')!.errors).toBeNull();
      expect(component.signupForm.get('passwordConfirm')!.errors).toBeNull();
      expect(component.signupForm.get('name')!.errors).toBeNull();
      expect(component.signupForm.get('surname')!.errors).toBeNull();
      expect(component.signupForm.get('termsOfUse')!.errors).toBeNull();

      const isSignupFormValid = component.signupForm.valid;
      expect(isSignupFormValid).toBeTruthy();
      expect(signupFormButton.disabled).toBeFalsy();

      const alertSpy = spyOn(window, 'alert');
      fixture.componentInstance.submit();
      expect(alertSpy).toHaveBeenCalled();

    })
  })
});