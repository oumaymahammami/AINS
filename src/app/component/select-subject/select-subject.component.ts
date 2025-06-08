import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-select-subject',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-subject.component.html',
  styleUrls: ['./select-subject.component.css']
})
export class SelectSubjectComponent implements OnInit {
  subjects = [
    { name: 'رياضيات', value: 'math', image: 'math.png' },
    { name: 'إيقاظ علمي', value: 'science', image: 'science.png' },
    { name: 'العربية', value: 'arabic', image: 'arabic.png' },
    { name: 'الفرنسية', value: 'french', image: 'french.png' }
  ];

  colors = ['#5BBCFF', '#FFFAB7', '#FFD1E3', '#7EA1FF'];
  currentMode: string | null = null;

  // Mapping first modules for each subject (update values accordingly)
  firstModuleMap: Record<string, string> = {
    math: 'algebra',      // example module value for math
    science: 'biology',   // example module value for science
    arabic: 'grammar',    // example module value for arabic
    french: 'vocabulary'  // example module value for french
  };

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.currentMode = params['mode'] || null;
    });
  }

  selectSubject(subjectValue: string) {
    if (this.currentMode === 'summary') {
      // Navigate directly to lesson page with first module of the selected subject
      const firstModule = this.firstModuleMap[subjectValue] || '';

      this.router.navigate(['/lesson'], {
        queryParams: {
          subject: subjectValue,
          module: firstModule,
          mode: this.currentMode
        }
      });
    } else {
      // Otherwise navigate to select-mode page or whatever is your flow
      this.router.navigate(['/select-mode'], {
        queryParams: { subject: subjectValue }
      });
    }
  }
}
