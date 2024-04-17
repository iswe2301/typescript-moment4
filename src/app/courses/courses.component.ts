import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  // Egenskap för kurslista, av typen Course (interface) som är en array. Initerar en tom array.
  courselist: Course[] = [];

  // Egenskap för filtrerade kurser av typen Course, initeras till tom array
  filteredCourses: Course[] = [];

  // Egenskap av typen sträng för sökinput, initeras till tom sträng
  searchValue: string = "";

  // Konstruktor som importerar service för kurser
  constructor(private courseservice: CourseService) { }

  // Initmetod som körs när applikationen är startad och klar
  ngOnInit() {
    // Anropar metod för att hämta kurserna och prenumererar på svaret
    this.courseservice.getCourses().subscribe(data => {
      // Tar emot datan och lagrar i kurslistan (array)
      this.courselist = data;
      // Lagrar även datan i arrayen för filtrerade kurser
      this.filteredCourses = data;
    });
  }
  // Metod för att söka efter kurs och lagra filtrerade kurser, returnerar inget värde
  searchCourse(): void {
    // Filtrerar kurser utifrån kurslistan
    this.filteredCourses = this.courselist.filter((course) =>
      // Kontrollerar om söksträngen matchar kursnamn eller kurskod, gör om till gemener
      course.coursename.toLowerCase().includes(this.searchValue.toLowerCase()) ||
      course.code.toLowerCase().includes(this.searchValue.toLowerCase())
    );
  }
}
