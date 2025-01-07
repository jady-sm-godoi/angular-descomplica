import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalhe',
  imports: [],
  templateUrl: './detalhe.component.html',
  styleUrl: './detalhe.component.css'
})
export class DetalheComponent implements OnInit {

  constructor(private route: ActivatedRoute){}

  identificador: number = 0;
  phone: string = '';
  firstname: string = '';

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if(params['id'] !== undefined){
        this.identificador = +params['id'];
        console.log(this.identificador);
      }
      if(params['phone'] !== undefined){
        this.phone = params['phone'];
        console.log(this.phone);
      }
      if(params['firstname'] !== undefined){
        this.firstname = params['firstname'];
        console.log(this.firstname);
      }
    });
  }

}
