import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [
    MatCardModule,
    MatButtonModule,
],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
