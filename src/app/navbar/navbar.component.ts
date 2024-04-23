import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  isScrolled = false;
  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 800;
  }
  tohome() {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  }
  toservice() {
    document.getElementById('ms365')?.scrollIntoView({ behavior: 'smooth' });
  }
  tosupport() {
    document.getElementById('service')?.scrollIntoView({ behavior: 'smooth' });
  }
  tooutsource() {
    document
      .getElementById('outsource')
      ?.scrollIntoView({ behavior: 'smooth' });
  }
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
}
