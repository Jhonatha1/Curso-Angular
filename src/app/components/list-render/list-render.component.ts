import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Animal } from '../../Animal';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
    animals: Animal[]= [
      {name : 'Perro', type: 'Dog', age: 10},
      {name : 'Gato', type: 'Cat', age: 10},
      {name : 'Pez', type: 'Fish', age: 10},
      {name : 'Pajaro', type: 'Bird', age: 10},
    ];

    animalDetails = ''

    showAge(animal:Animal){
      this.animalDetails = `'O pet' ${animal.name} tem ${animal.age} anos de idade.`
    }
}
