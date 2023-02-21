import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
projects: Project[] = [
  {
    title:'Pokedex',
    tecnologies: 'javascript, HTML, CSS, ReactJs, axios',
    description: ['Projeto Pokédex foi feito com o intuito de simular um site com as informações dos Pokémons. Funcionalidades'],
  },
  {
    title: 'Cokenu',
    tecnologies: 'javascript, HTML, CSS, ReactJs, axios',
    description: ['Projeto Cookenu foi feito com o intuito de simular um site de receitas. ']
  }
]

ngOnInit(): void {}
}
