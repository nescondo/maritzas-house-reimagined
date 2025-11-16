import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive,
    MatTabsModule,
    MatIconModule
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