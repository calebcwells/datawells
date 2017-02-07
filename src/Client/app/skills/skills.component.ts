import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';
import { ISkill } from './skill.model';

@Component({
    selector: 'data-wells-skills',
    templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit, OnDestroy {
    public primarySkills: ISkill[];
    public secondarySkills: ISkill[];
    private subscription: Subscription;

    constructor(private http: Http) { }

    ngOnInit(): void {
        this.subscription = this.http.get('/api/Skills/SkillsList').map(response => response.json()).subscribe(results => {
            this.primarySkills = results.filter(s => s.type === 'Primary');
            this.secondarySkills = results.filter(s => s.type === 'Secondary');
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
