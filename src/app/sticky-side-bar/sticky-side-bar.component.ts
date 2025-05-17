import { Component, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sticky-side-bar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './sticky-side-bar.component.html',
  styleUrl: './sticky-side-bar.component.scss'
})
export class StickySideBarComponent {
  isBackToTop: boolean = false;
  isHidden: boolean = true;

  @HostListener('window:scroll', ['$event'])
  onScroll() {

  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const homeSection = document.getElementById('home');
  const contactSection = document.getElementById('contact');
  const footerSection = document.getElementById('footer');

  this.isHidden = scrollPosition < (homeSection?.offsetHeight || 0);

  // Change to "Back To Top" when contact section is in view
  if ((contactSection && this.isElementInViewport(contactSection)) ||
  (footerSection && this.isElementInViewport(footerSection))) {
    this.isBackToTop = true;
  } 
  else {
    this.isBackToTop = false;
  }
}

handleClick() {
  if (!this.isBackToTop) {
    const projectsSection = document.getElementById('project');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  } else {
    const homeSection = document.getElementById('home');
    homeSection?.scrollIntoView({ behavior: 'smooth' });
  }
}

private isElementInViewport(el: HTMLElement): boolean {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  // Consider the element in view when its top edge is visible
  return rect.top >= 0 && rect.top <= windowHeight;
}

}