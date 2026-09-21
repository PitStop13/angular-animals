import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Animals } from './animals/animals';

@Component({
  imports: [Animals],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  user = "User";

}
