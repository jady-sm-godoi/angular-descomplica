import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-simples',
  standalone: true,  // Marca este componente como standalone
  imports: [CommonModule],
  templateUrl: './lista-simples.component.html',
  styleUrls: ['./lista-simples.component.css'],
})
export class ListaSimplesComponent implements OnInit {

  users: User[] = [];

  constructor(private router: Router, public service: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.service.getUsers().subscribe({
      next: (response) => {
        console.log(response);
        this.users = response;
      },
      error: (erro: any) => {
        console.log('Ocorreu algum erro: ' + erro);
      }
    });
  }

  goToDetail(user: User): void {
    this.router.navigate(['detalhe', user.id, user.phone, user.name]);
  }
}
