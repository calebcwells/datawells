import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule, routedComponents } from './home.routes';

@NgModule({
    imports: [HomeRoutingModule],
    declarations: [HomeComponent, routedComponents]
})
export class HomeModule { }
