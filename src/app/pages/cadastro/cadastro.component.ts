import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { User } from '../../models/user';

import {NgxMaskDirective, provideNgxMask} from 'ngx-mask'
import { GenericValidator } from '../../comum/validador';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
  standalone: true,
  providers: [ provideNgxMask(), UserService, provideNativeDateAdapter()],
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatDatepicker,
    ReactiveFormsModule,
    NgxMaskDirective,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule
  ]
})
export class CadastroComponent {

  user: User = new User;
  addressForm: any;


  // private fb = inject(FormBuilder);
  constructor(private fb: FormBuilder, private service: UserService){

    this.addressForm = this.fb.group({
      name: [null, Validators.compose([
        Validators.required, Validators.minLength(2), Validators.maxLength(70)
      ])],
      email: [null, Validators.required],
      cpf: [null, Validators.compose([
        Validators.required, GenericValidator.isValidCpf()
      ])],
      phone: [null, Validators.required],
      dataNascimento: [null, Validators.required],
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

    if(this.addressForm.controls['dataNascimento'].value)
      this.user.dataNascimento = this.addressForm.controls['dataNascimento'].value;

    if(this.addressForm.controls['cpf'].value)
      this.user.cpf = this.addressForm.controls['cpf'].value;

    if(this.addressForm.controls['password'].value)
      this.user.password = this.addressForm.controls['password'].value;

    // alert('Usuário cadastrado!');

    console.log(this.user);

    // localStorage.setItem('user', JSON.stringify(this.user));

    this.service.addUser(this.user).subscribe({
      next: (response) => {
        console.log(response)
        alert('Dado registrado com sucesso!')
      },
      error: (erro:any) => {
        console.log(erro)
        alert('Ocorreu algum erro.')
      }
    })
  }
}
