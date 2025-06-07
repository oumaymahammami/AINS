import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finished',
   standalone: true,
  imports: [CommonModule],
  templateUrl: './finished.component.html',
  styleUrls: ['./finished.component.css']
})
export class FinishedComponent {
  goHome() {
    // Redirect to home or desired route
    window.location.href = '/';
  }
}
