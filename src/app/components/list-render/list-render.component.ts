import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Animal } from '../../Animal';

import { RouterLink } from '@angular/router';

import { ListService } from '../../services/list.service';
import { get } from 'http';
@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
    animals: Animal[]= [    ];

    animalDetails = ''

    constructor(private listService: ListService){this.getAnimals()}


    showAge(animal:Animal){
      this.animalDetails = `'O pet' ${animal.name} tem ${animal.age} anos de idade.`
    }

    removeAnimal(animal: Animal){
      console.log('Removendo animal');
      this.animals = this.listService.remove(this.animals, animal);
    }

    getAnimals():void{
      this.listService.getAll().subscribe((animals) => (this.animals = animals));
    }
}