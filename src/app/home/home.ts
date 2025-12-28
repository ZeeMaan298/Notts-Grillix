import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
