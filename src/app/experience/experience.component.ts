import { Component } from '@angular/core';
import { NgFor,NgIf,NgClass } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  selectedItem: any;
  isMobile: boolean = false;

  ngOnInit(): void {
    this.selectedItem = this.experienceItems[0];
    this.checkIfMobile();
    window.addEventListener('resize', () => this.checkIfMobile());
   }

  experienceItems = [
    {
      title: 'Software Engineer Intern at Copart',
      date: 'Dallas, Texas | Jan 2024 – Present',
      link: 'https://www.copart.com/',
      details:[
        "Created 15+ responsive Angular UI components based on Figma designs using PrimeNG and SCSS, ensuring compatibility with AngularJS legacy systems and boosting user engagement by 20%.",
        "Broadcasted events to Google Analytics (GTM) delivering 35% increase in actionable insights, enabling marketing team to optimize campaign strategies and drive 20% growth in product sales.",
        "Led weekly release cycles delivering 10+ critical defect fixes, maintaining 100% SLA compliance and enhancing customer satisfaction.",
        "Revamped Lot Details pages through Angular14 migration utilizing TypeScript, HTML, CSS, Spring Boot, Bootstrap, REST APIs, and MySQL, delivering enhanced UI functionalities for clients.",
        "Automated UI testing with BDD framework for Copart website, achieving 40% defect reduction through end-to-end testing while improving application reliability and release cycles.",
        "Orchestrated comprehensive A/B testing for UI optimization, managing 20+ concurrent experiments across 10K+ users, driving 15% increase in feature adoption through data-driven strategies.",
        "Executed secure license uploads & robust search feature, leveraging Angular, TypeScript, RESTful APIs & Spring Boot.",
        ],
      delay: 200
    },
    {
      title: 'Software Engineer at Oracle Cerner',
      date: 'Bengaluru, India | May 2020 – Jan 2023',
      link:'https://go.oracle.com/LP=142384?src1=:ad:pas:go:dg:a_nas:l5:RC_GOOG240501P00011C00354:MainAd&gad_source=1&gclid=Cj0KCQjwzva1BhD3ARIsADQuPnWMiAg3NgZ6ys7_TyPjesEmSYfNxSebchOBN1qEClV4WwueXRwKaaEaAikWEALw_wcB',

      details:[
        "Incorporated server-side rendering with Thymeleaf in Angular application, reducing page load time by 25% while achieving 15% performance boost and enhancing SEO metrics.",
        "Optimized website performance by 3% through lazy loading implementation and Webpack code splitting, delivering faster component access and improved user experience.",
        "Resolved HP-Fortify and SonarQube vulnerabilities boosting code quality by 30%, while implementing Splunk log visualization for enhanced system monitoring.",
        "Architected NGINX server configuration with reverse proxy for SpringBoot services, deploying on AWS EC2 instances to achieve 20% faster request processing.",
        "Engineered Visit List Filter Queue feature prioritizing patient encounters based on appointment dates and emergencies, seamlessly integrating with Revenue Cycle system.",
        "Transformed APIs from synchronous to asynchronous using Spring Reactive Programming, achieving 50% performance optimization and implementing CI/CD through Jenkins pipeline.",
        "Streamlined EHR data retrieval through API development for Cerner Revenue Cycle, resulting in 30% improvement in order processing efficiency.",
        "Worked on spike, stories, and defects for the product Revenue Cycle, which involved assessing the interaction between multiple systems and API/design changes required to implement new features.",
        ],
      delay: 300
    },
    {
      title: 'Software Engineer Intern <br>at Collins Aerospace',
      date: 'Hyderabad, India | December 2019 – May 2020',
      link:'https://www.collinsaerospace.com/',
      details: [
          "Developed Object-Oriented Fullstack Applications and REST APIs using Java 8 functional programming, adhering to SOLID principles and implementing design patterns.",
          "Achieved 85%+ coverage with JUnit tests, leveraged Postman for backend testing, and contibuted to code reviews",
          "Implemented user-friendly web login functionality and highly secure microservices-based REST APIs for IMMS Consumer Services using Java Spring Boot. Included the generation of JWT tokens, improving user access security by 35%.",
          "Built an automation tool named Bidirectional Trace Validation, which crawls the JAMA & SVN websites to capture the requirement numbers, significantly reducing  the team’s manual effort by 30 hours during release activity. ",
          "Day To Day Work: Worked with Flight Management System and Flight User Interface teams, mostly improving the consistency and efficiency of enterprise applications, and was involved in Continuous Build and Test (CBT)."      
      ],
      delay: 400
    }
  ];


  // toggleItem(item: any) {
  //     this.selectedItem = item;
  // }

  toggleItem(item: any) {
    if (this.isMobile) {
      this.selectedItem = this.selectedItem === item ? null : item;
    } else {
      this.selectedItem = item;
    }  
  }

  checkIfMobile() {
    this.isMobile = window.innerWidth <= 768;
  }
}
