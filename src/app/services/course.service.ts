import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  // Privat egenskap för url, av typen sträng
  private url: string = "https://webbutveckling.miun.se/files/ramschema_ht23.json";

  // Konstruktor
  constructor(private http: HttpClient) { } // Läser in http-klienten för att få tillgång i klassen

}
