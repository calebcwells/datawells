import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ISkill } from './skill.model';

@Component({
  selector: 'data-wells-skills',
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
    public primarySkills: ISkill[];
    public secondarySkills: ISkill[];

    constructor(private http: Http) {
        this.http.get('/api/Skills/SkillsList').map(response => response.json()).subscribe(results => {
            this.primarySkills = results.filter(s => s.type === 'Primary');
            this.secondarySkills = results.filter(s => s.type === 'Secondary');
        });
    }

}
