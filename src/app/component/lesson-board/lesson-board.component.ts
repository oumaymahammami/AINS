import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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

  constructor() {}

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
    // For example, alert the current slide's question or text
    alert(`السؤال: ${this.slides[this.currentSlideIndex].text}`);
  }

}
