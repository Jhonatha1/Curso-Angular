import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  size = 40;
  font = 'arial';
  color = 'red';

  classes = ['green-title', 'small-title'];
  
  underline = 'underline-title';
}
