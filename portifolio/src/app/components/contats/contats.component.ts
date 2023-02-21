import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contats',
  templateUrl: './contats.component.html',
  styleUrls: ['./contats.component.css']
})
export class ContatsComponent {
@Input() btnText!: string;
submit(){
  console.log("Enviou formulario")
}
}
