import { Component } from '@angular/core';
import { HeadComponent } from "../../components/head/head.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [HeadComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  nome:String = "Jady Godoi"

}
