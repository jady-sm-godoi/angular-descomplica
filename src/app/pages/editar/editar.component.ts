import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { User } from '../../models/user';


@Component({
  selector: 'app-editar',
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {
  user: User = new User;

  addressForm: any;

  constructor(private fb: FormBuilder){
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user') || '{}')
    }

    this.addressForm = this.fb.group({
      name: [this.user.name, Validators.compose([
        Validators.required, Validators.minLength(2), Validators.maxLength(70)
      ])],
      email: [this.user.email, Validators.required],
      phone: [this.user.phone, Validators.required],
      password: [null, Validators.required]
    });

  }

  onSubmit(): void {
    this.user.id = '1';
    if(this.addressForm.controls['name'].value)
      this.user.name = this.addressForm.controls['name'].value;

    if(this.addressForm.controls['email'].value)
      this.user.email = this.addressForm.controls['email'].value;

    if(this.addressForm.controls['phone'].value)
      this.user.phone = this.addressForm.controls['phone'].value;

    if(this.addressForm.controls['password'].value)
      this.user.password = this.addressForm.controls['password'].value;

    alert('Usuário cadastrado!');

    console.log(this.user);

    localStorage.setItem('user', JSON.stringify(this.user));
  }
}
