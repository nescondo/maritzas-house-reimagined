import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive,
    MatTabsModule,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  navLinks = [
    { path: '/', label: 'Home', exact: true },
    { path: '/aboutus', label: 'About Us', exact: false },
    { path: '/contactinfo', label: 'Contact Info', exact: false }
  ];
}