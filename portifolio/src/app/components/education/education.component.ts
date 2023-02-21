import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
educationList: Education[] = [
  {
    instituto: 'Labenu',
    curso: 'desenvolvimento web fullstak',
    periodo: '2021-2022',
    status: 'concluido'
  },
  {
    instituto: 'UFSCar',
    curso: 'Ecologia e Recursos Naturais',
    periodo: '2018-2020',
    status: 'concluido'
  }
]
  ngOnInit(): void {}
}
