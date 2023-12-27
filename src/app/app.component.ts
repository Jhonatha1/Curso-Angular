import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ParentDataComponent } from "./components/parent-data/parent-data.component";
import { DirectivesComponent } from "./components/directives/directives.component";
import { IfRenderComponent} from "./components/if-render/if-render.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, FirstComponentComponent, ParentDataComponent, DirectivesComponent, IfRenderComponent]
})
export class AppComponent {
  title = 'curso-angular';
  userName = 'Javier';

  userData = {
    email: 'javier@gmail.com',
    role: 'admin'
  }
}
