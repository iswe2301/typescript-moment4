import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  // Privat egenskap för url, av typen sträng
  private url: string = "https://webbutveckling.miun.se/files/ramschema_ht23.json";

  // Konstruktor
  constructor(private http: HttpClient) { } // Läser in http-klienten för att få tillgång i klassen

  // Metod för att hämta kurser, tar emot en array av kurser enligt interfacet
  getCourses(): Observable<Course[]> {

    // Returnerar datat från URL:en genom get-metoden
    return this.http.get<Course[]>(this.url);
  }
}
