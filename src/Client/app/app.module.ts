import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillSliderComponent } from './animations/skill-slider.animation';
import { ContactComponent } from './contact/contact.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavigationComponent,
        AboutComponent,
        SkillsComponent,
        SkillSliderComponent,
        ContactComponent
    ],
    imports: [
        UniversalModule,
        FormsModule,
        ReactiveFormsModule,
        Ng2PageScrollModule.forRoot()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
