import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-home',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
 menuOpen = true;

toggleMenu() {
  this.menuOpen = !this.menuOpen;
}


}
