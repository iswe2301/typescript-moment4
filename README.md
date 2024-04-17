# DT208G - Programmering i TypeScript, Moment 4 Angular II

## Projektbeskrivning
I detta projekt har en Angular-baserad webbapplikation utvecklats för att erbjuda en plattform där användare kan se ramschema för Webbutvecklingsprogrammet på Mittuniversitetet. Applikationen hämtar data från en webbtjänst och presenterar en tabell över kurserna på webbsidan.

Projektet har utvecklats som en del av kursen DT208G - Programmering i TypeScript.

## Om applikationen
Applikationen är byggd med Angular, HTML och TypeScript. Styling har gjorts med SCSS. All interaktion på applikationen hanteras genom Angulars komponenter och databinding. Användare kan filtrera kurser i tabellen genom att söka efter kurskod eller kursnamn, samt sortera tabellen i stigande och fallande ordning baserat på kurskod, kursnamn eller progression.

### Huvudfunktioner
Webbapplikationen består av följande huvudfunktioner:

* **Sökfunktion**: Användare kan söka efter specifika kurser med hjälp av sökfältet. Filtrering av kurser sker direkt när input i sökfältet görs.
* **Sorteringsfunktion**: Kursinformation kan sorteras i både stigande och fallande ordning genom att klicka på rubrikerna för respektive kolumn: kurskod, kursnamn eller progression.
* **Dynamiskt innehåll**: Använder Angulars *ngFor för att dynamiskt lista kurser och [(ngModel)] för tvåvägsdatabindning i sökfunktionen.

### Utvecklingsmiljö
* **Angular CLI:** för att skapa och hantera Angular-projektstrukturen.
* **Node.js:** som plattform för att köra JavaScript på serversidan.
* **Netlify:** för publicering av webbapplikationen.

## Om
* **Av:** Isa Westling
* **Kurs:** DT208G Programmering i TypeScript
* **Program:** Webbutvecklingsprogrammet
* **År:** 2024
* **Skola:** Mittuniversitetet