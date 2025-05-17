import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  constructor() {}

  projects: any[] =[];

  responsiveOptions: any[] | undefined;

  ngOnInit() {
    this.projects = [
      {
        title: 'Streamlining Campus Dining',
        link: 'https://devpost.com/software/streamlining-campus-dining',
        gitUrl: 'https://github.com/farhanarrafi/hackunt2023-dining-scheduler',
        images:[
          'assets/streamling-campus-dining/1-login.png',
          'assets/streamling-campus-dining/2-meal-options.png',
          'assets/streamling-campus-dining/3-table-options.png',
          'assets/streamling-campus-dining/4-menu-selection.png',
          'assets/streamling-campus-dining/5-confirmation.png'
        ],
        delay: 300
      },
      {
        title: 'Todo Management Application',
        link:'https://www.youtube.com/watch?v=3XAwT8Ifueg',
        gitUrl: '',
        images: [
          'assets/todo-application/1-createtodo.png',
          'assets/todo-application/2-updatetodo.png',
          'assets/todo-application/3-pagination.png',
          'assets/todo-application/4-pagination.png',
          'assets/todo-application/5-filtering.png',
          'assets/todo-application/6-sorting.png'
        ],
        delay: 300
      },
      {
        title: 'Employee Management System',
        link:'https://www.youtube.com/watch?v=XsTl_Lvbvys',
        gitUrl: 'https://github.com/akhilcharugulla/employeemanagementsystem',
        images: [
          'assets/employee-management-system/1-employee-management-system-homepage.png',
          'assets/employee-management-system/2-employee-management-system-addemployee.png',
          'assets/employee-management-system/3-employee-management-system-updateemployee.png',
          'assets/employee-management-system/4-employee-management-system-deleteemployee.png',
          'assets/employee-management-system/5-employee-management-system-deleteemployee2.png'
        ],
        delay: 300
      },
      {
        title: 'Rock Paper Scissor Game',
        link: 'https://akhilcharugulla.github.io/Rockpapaerscissor-clone-for-deployment/',
        gitUrl:'https://github.com/akhilcharugulla/Rockpapaerscissor-clone-for-deployment',
        images:[
          'assets/rock-paper-scissor/1-Rock paper Scissor-home.png',
          'assets/rock-paper-scissor/2-Rock paper Scissor-gamestart.png',
          'assets/rock-paper-scissor/3-Rock paper Scissor-outcome.png',
          'assets/rock-paper-scissor/4-Rock paper Scissor-multiplesets.png'
        ],
        delay: 200
      },
      {
        title: 'Calculator Application',
        link:'https://akhilcharugulla.github.io/calculator-for-deployment/',
        gitUrl: 'https://github.com/akhilcharugulla/calculator-for-deployment',
        images: [
          'assets/calculator/1-calculator-main page.png',
          'assets/calculator/2-calculator-action.png',
          'assets/calculator/3-calculator-someactions.png',
          'assets/calculator/4-calculator-someactions-clearhistory.png'
        ],
        delay: 300
      },
      {
        title: 'Shopping Cart',
        link:'https://github.com/akhilcharugulla/frontend-projects/tree/master/tic_tac_toe',
        gitUrl: 'https://github.com/akhilcharugulla/frontend-projects/tree/master/tic_tac_toe',
        images: ['assets/employee-management-system/5-employee-management-system-deleteemployee2.png'],
        delay: 300
      }
    ];

      this.responsiveOptions = [
          {
              breakpoint: '1400px',
              numVisible: 3,
              numScroll: 3
          },
          {
              breakpoint: '1220px',
              numVisible: 2,
              numScroll: 2
          },
          {
              breakpoint: '1100px',
              numVisible: 1,
              numScroll: 1
          }
      ];
  }

}
