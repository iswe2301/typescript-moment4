import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  // Egenskap för kurslista, av typen Course (interface) som är en array. Initerar en tom array.
  courselist: Course[] = [];

  // Konstruktor som importerar service för kurser
  constructor(private courseservice: CourseService) { }

  // Initmetod som körs när applikationen är startad och klar
  ngOnInit() {
    // Anropar metod för att hämta kurserna och prenumererar på svaret
    this.courseservice.getCourses().subscribe(data => {
      // Tar emot datan och lagrar i kurslistan (array)
      this.courselist = data;
    })
  }
}
