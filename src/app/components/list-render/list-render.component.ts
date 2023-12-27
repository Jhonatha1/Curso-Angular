import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
    animals= [
      {name : 'Perro', type: 'Dog'},
      {name : 'Gato', type: 'Cat'},
      {name : 'Pez', type: 'Fish'},
      {name : 'Pajaro', type: 'Bird'},
    ]
}
