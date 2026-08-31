//App {}
// app.component.ts
import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslationService } from './translation-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  t: TranslationService = inject(TranslationService);

  onLangChange(event: Event) {
    const val = (event.target as HTMLSelectElement).value as 'en' | 'hi' | 'bn';
    this.t.setLanguage(val);
  }
}
