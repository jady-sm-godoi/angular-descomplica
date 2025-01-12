import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { AutorizacaoService } from '../../services/autorizacao.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class LoginComponent {

  constructor(private autorizacaoService: AutorizacaoService){}

  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    email: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(50), Validators.email])
    ],
    password: ['', Validators.required]
  });


  email = this.addressForm.controls['email'];

  getErrorMessage(){
    if(this.email.hasError('required')){
      return 'O email é obrigatório.'
    }
    return this.email.hasError('email') ? 'Você deve preencher um email válido.' : '';
  }

  loginClick(){
    if(this.autorizacaoService.obterLoginStatus())
      this.autorizacaoService.deslogar();
    else
      this.autorizacaoService.autorizar();
  }
  onSubmit(): void {
    this.loginClick();
    alert('Thanks!');
  }
}
