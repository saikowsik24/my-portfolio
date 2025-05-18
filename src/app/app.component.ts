import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from "./contact/contact.component";
import { ProjectsComponent } from "./projects/projects.component";
import { EducationComponent } from "./education/education.component";
import { AboutComponent } from "./about/about.component";
import { SkillsComponent } from "./skills/skills.component";
import { HomeComponent } from "./home/home.component";
import { ExperienceComponent } from "./experience/experience.component";
import { FooterComponent } from './footer/footer.component';
import { StickySideBarComponent } from './sticky-side-bar/sticky-side-bar.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ContactComponent, ProjectsComponent, EducationComponent, 
    AboutComponent, SkillsComponent, HomeComponent, ExperienceComponent, StickySideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
    ngOnInit(): void {
      AOS.init();
    }
    
  title = 'portfolio-Meda Venkata Sai Kowsik';
}
