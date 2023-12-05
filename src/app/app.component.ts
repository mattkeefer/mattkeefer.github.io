import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  listItems = [
    {title: 'portfolio', uri: 'https://mattkeefer.github.io/portfolio'},
    {title: 'apps', uri: '#'},
    {title: 'resume', uri: 'https://www.linkedin.com/in/mkeefer'},
    {title: 'web solutions', uri: '#'},
  ];
}
