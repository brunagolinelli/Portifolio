import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
myData: string[][] = [
  ['Nome', 'Bruna Nallis'],
  ['Idade', '28 anos'],
  ['Tempo de experiência', '1ano'],
  ['Educação', 'Web-Fullstack: Labenu'],
  ['Interesse', 'Desenvolvimento fullstack']
];

aboutMe: string[] = [
  'Olá, sou Desenvolvedora de Software com 1 ano de experiência em desenvolvimento FrontEnd. Trabalhei como desenvolvedora FrontEnd usando tecnologias(VueJs, Angular 2, javascript, CSS e HTML5. Sou proativa e acertiva, busco sempre estar aprendendo novas tecnologias e aprimorando meu conhecimento.',
];

  constructor(){}

ngOnInit(): void {
    
}
}
