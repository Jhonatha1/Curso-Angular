import {Routes} from '@angular/router';
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { AppRoutingModule } from './app-routing.module';

export const routes = [

    {path: '', component: FirstComponentComponent},
    {path: 'list', component: ListRenderComponent}

];

    