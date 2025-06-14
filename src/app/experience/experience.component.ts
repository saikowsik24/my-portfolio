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
        "Engineered and managed high-availability Kubernetes clusters across development, QA, and production environments using kubeadm, enabling reliable microservices orchestration and seamless rollouts.",
        "Designed and automated AWS infrastructure using Terraform and Ansible, provisioning scalable cloud resources including EC2, VPC, S3, ALB, IAM, and Lambda across multiple environments.",
        "Implemented and maintained CI/CD pipelines using GitHub Actions for deploying Java, Python, and Angular microservices to Kubernetes clusters on AWS and GCP, accelerating delivery cycles.",
        "Led blue-green deployment strategies within Kubernetes clusters, ensuring zero-downtime releases and enhancing system stability for global SaaS applications.",
        "Deployed and configured monitoring solutions with Prometheus and Grafana for Kubernetes workloads, and centralized logging using ELK stack for observability and root cause analysis.",
        "Integrated Kubernetes-native security and compliance checks using tools like SonarQube, Checkmarx, and Twistlock to ensure secure deployments and DevSecOps best practices.",
        "Managed Docker-based containerization of backend and frontend services, packaged with Helm charts for consistent deployments across tenants and environments.",
        "Migrated 150+ projects from GitLab to GitHub, optimizing CI/CD workflows and standardizing deployment pipelines using GitHub-hosted runners.",
        "Collaborated with cross-functional teams to support production workloads on AWS EKS and troubleshoot real-time deployment issues in 24/7 on-call rotations.",
        "Contributed to major platforms including TradeEdge and Market Connect, driving Kubernetes and AWS-based DevOps transformation for clients like Nike, Heineken, and Hipus."
        ],
      delay: 200
    },
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
