import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home-component',
  imports: [CommonModule, RouterLink],
  templateUrl: './home-component.html',
  styleUrls: ['./home-component.css'],
})
export class HomeComponent {
  // images used by the CSS-driven slideshow in the template
  images = ['assets/bull.jpg', 'assets/chart.jpg', 'assets/hero-large.jpg'];
}
