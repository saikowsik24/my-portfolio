import { Component, AfterViewInit, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  private observer: IntersectionObserver | null = null;
  private sections: HTMLElement[] = [];
  private navLinks: HTMLAnchorElement[] = [];
  private mobileMenuIcon: HTMLElement | null = null;
  private navMenu: HTMLElement | null = null;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.sections = Array.from(document.querySelectorAll('section[id]'));
    this.navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('nav .nav-menu a'));
    this.mobileMenuIcon = document.getElementById('mobile-menu-icon');
    this.navMenu = document.querySelector('.nav-menu');

    this.setupIntersectionObserver();
    this.setupNavLinkClickListeners();
    this.setupMobileMenuToggle();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.setActiveNavLink(entry.target.id);
        }
      });
    }, options);

    this.sections.forEach((section) => {
      this.observer?.observe(section);
    });
  }

  private setupNavLinkClickListeners(): void {
    this.navLinks.forEach((link: HTMLAnchorElement) => {
      this.renderer.listen(link, 'click', (event: Event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId ?? '');
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        // Close mobile menu when a link is clicked
        if (this.navMenu) {
          this.renderer.removeClass(this.navMenu, 'show');
        }
      });
    });
  }

  private setActiveNavLink(sectionId: string): void {
    this.navLinks.forEach((link: HTMLAnchorElement) => {
      const parentElement = link.parentElement;
      if (parentElement) {
        if (link.getAttribute('href') === `#${sectionId}`) {
          this.renderer.addClass(parentElement, 'active');
        } else {
          this.renderer.removeClass(parentElement, 'active');
        }
      }
    });
  }

  private setupMobileMenuToggle(): void {
    if (this.mobileMenuIcon && this.navMenu) {
      this.renderer.listen(this.mobileMenuIcon, 'click', (event: Event) => {
        event.stopPropagation(); // Prevent the click from propagating to the document
        this.toggleMobileMenu();
      });
  
      this.renderer.listen('document', 'click', (event: Event) => {
        if (!this.navMenu?.contains(event.target as Node) && 
            !this.mobileMenuIcon?.contains(event.target as Node)) {
          this.closeMobileMenu();
        }
      });
    }
  }
  
  private toggleMobileMenu(): void {
    if (this.navMenu) {
      if (this.navMenu.classList.contains('show')) {
        this.closeMobileMenu();
      } else {
        this.openMobileMenu();
      }
    }
  }
  
  private openMobileMenu(): void {
    if (this.navMenu) {
      this.renderer.addClass(this.navMenu, 'show');
    }
  }
  
  private closeMobileMenu(): void {
    if (this.navMenu) {
      this.renderer.removeClass(this.navMenu, 'show');
    }
  }
  
}