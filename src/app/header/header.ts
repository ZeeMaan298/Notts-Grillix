import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
menuOpen = false;

toggleMenu1() {
  this.menuOpen = !this.menuOpen;
}


  toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav?.classList.toggle('active');
  }
  
}
