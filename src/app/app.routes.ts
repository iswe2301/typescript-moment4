import { Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';

// Skapar routing
export const routes: Routes = [
    { path: "courses", component: CoursesComponent },
    { path: "", redirectTo: "/courses", pathMatch: "full" }
];
