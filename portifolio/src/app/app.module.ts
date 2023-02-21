import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
 




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanerComponent } from './components/baner/baner.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContatsComponent } from './components/contats/contats.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { ResponsiveDirective } from './directives/responsive.directive';

@NgModule({
  declarations: [
    AppComponent,
    BanerComponent,
    PersonalInformationComponent,
    EducationComponent,
    ProjectsComponent,
    ContatsComponent,
    WorkExperienceComponent,
    ResponsiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,HttpClientModule, FormsModule, ReactiveFormsModule]
})
export class AppModule { }
