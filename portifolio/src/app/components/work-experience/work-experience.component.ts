import { Component, OnInit } from '@angular/core';
import { WorkExperience } from 'src/app/models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit{
  workExpList: WorkExperience[] = [
    {
      role: 'Desenvolvedora FrontEnd',
      company: 'PREDIFY',
      duration: '04/2022 - 12/2022',
      description:['Trabalhei como desenvolvedora web frontEnd para ecommerce usando tecnologias(Figma, VueJs, AngularJs, javascript, bootstrap']
    }
  ]
  ngOnInit(): void {}
}
