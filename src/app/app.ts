import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected readonly title = signal('password');
  
  includeLetters:boolean = false;
  includeNumbers:boolean = false;
  includeSysmbols:boolean = false;

  modifyLetters(){
    this.includeLetters = !this.includeLetters;
  }

  modifyNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }
  modifySymbols(){
    this.includeSysmbols = !this.includeSysmbols;
  }

  generatePassword(){
    console.log
    (`Değerlerim;
      Alfabe: ${this.includeLetters},
      Sayılar: ${this.includeNumbers},
      Semboller: ${this.includeSysmbols}
      `);
  }
}
