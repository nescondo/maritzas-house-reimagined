import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ViewportScroller } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-home',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  constructor(private viewportScroller: ViewportScroller) {}

  scrollToSection(sectionId: string): void {
    if (sectionId === 'contact') {
      const el = document.getElementById(sectionId);
      if (!el) return;
      const offset = 80;
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      return;
    }

    this.viewportScroller.scrollToAnchor(sectionId);
  }
}
