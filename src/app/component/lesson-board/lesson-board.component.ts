import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

import lessonData from '../../../assets/lesson.json'; // adjust path if needed

@Component({
  selector: 'app-lesson-board',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './lesson-board.component.html',
  styleUrls: ['./lesson-board.component.css']
})
export class LessonBoardComponent implements OnInit {
  title = lessonData.title;
  slides: { number: string; text: string }[] = [];
  currentSlideIndex = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.slides = lessonData.slides.map((slideObj: any) => {
      const key = Object.keys(slideObj)[0];
      const value = slideObj[key];
      return { number: key, text: value };
    });
  }

  nextSlide(): void {
    if (this.currentSlideIndex < this.slides.length - 1) {
      this.currentSlideIndex++;
    }
  }

  prevSlide(): void {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    }
  }
  onQuestion(): void {
    this.router.navigate(['/select-mode'], {
      queryParams: {
        mode: 'general',
        context: this.slides[this.currentSlideIndex].text
      }
    });
  }

}
