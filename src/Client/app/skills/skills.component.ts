import { Component } from '@angular/core';

@Component({
  selector: 'data-wells-skills',
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
    public primarySkills = PRIMARY_SKILLS;
    public secondarySkills = SECONDARY_SKILLS;
}

const PRIMARY_SKILLS = [
    { image: 'dist/skill-dotnet.jpg', title: '.NET', fullUrl: 'https://www.microsoft.com/net', friendlyUrl: 'microsoft.com/net' },
    { image: 'dist/skill-angular2.jpg', title: 'Angular 2', fullUrl: 'https://angular.io/', friendlyUrl: 'angular.io' },
    { image: 'dist/skill-typescript.jpg', title: 'TypeScript', fullUrl: 'https://www.typescriptlang.org/', friendlyUrl: 'typescriptlang.org' },
    { image: 'dist/skill-ps.jpg', title: 'Photoshop', fullUrl: 'http://www.adobe.com/products/photoshop.html', friendlyUrl: 'adobe.com/photoshop' },
    { image: 'dist/skill-rxjs.jpg', title: 'RxJS', fullUrl: 'http://reactivex.io/rxjs/', friendlyUrl: 'reactivex.io/rxjs' },
    { image: 'dist/skill-webpack.jpg', title: 'Webpack', fullUrl: 'https://webpack.js.org/', friendlyUrl: 'webpack.js.org' },
    { image: 'dist/skill-html5.jpg', title: 'HTML 5', fullUrl: 'https://www.w3.org/TR/html5/', friendlyUrl: 'w3.org/html5' },
    { image: 'dist/skill-css3.jpg', title: 'CSS 3', fullUrl: 'https://www.w3.org/TR/2014/REC-css-namespaces-3-20140320/', friendlyUrl: 'w3.org/css3' },
    { image: 'dist/skill-javascript.jpg', title: 'JavaScript', fullUrl: 'https://www.javascript.com/', friendlyUrl: 'javascript.com' },
    { image: 'dist/skill-json.jpg', title: 'JSON', fullUrl: 'http://www.json.org/', friendlyUrl: 'json.org' },
    { image: 'dist/skill-mdl.jpg', title: 'Material Design', fullUrl: 'https://getmdl.io/', friendlyUrl: 'getmdl.io' },
    { image: 'dist/skill-bootstrap.jpg', title: 'Bootstrap', fullUrl: 'http://getbootstrap.com/', friendlyUrl: 'getbootstrap.com' },
    { image: 'dist/skill-ef.jpg', title: 'Entity Framework', fullUrl: 'https://docs.microsoft.com/en-us/ef/', friendlyUrl: 'docs.microsoft.com/ef' },
    { image: 'dist/skill-sql.jpg', title: 'SQL', fullUrl: 'https://www.microsoft.com/en-us/sql-server/', friendlyUrl: 'microsoft.com/sql-server' },
    { image: 'dist/skill-npm.jpg', title: 'NPM', fullUrl: 'https://www.npmjs.com/', friendlyUrl: 'npmjs.com' },
    { image: 'dist/skill-git.jpg', title: 'Git', fullUrl: 'https://git-scm.com/', friendlyUrl: 'git-scm.com' },
    { image: 'dist/skill-sourcetree.jpg', title: 'SourceTree', fullUrl: 'https://www.sourcetreeapp.com/', friendlyUrl: 'sourcetreeapp.com' },
    { image: 'dist/skill-github.jpg', title: 'Github', fullUrl: 'https://github.com/', friendlyUrl: 'github.com' },
    { image: 'dist/skill-azure.jpg', title: 'Azure', fullUrl: 'https://azure.microsoft.com/', friendlyUrl: 'azure.microsoft.com' }
];

const SECONDARY_SKILLS = [
    { image: 'dist/skill-xml.jpg', title: 'XML', fullUrl: 'https://www.w3.org/XML/', friendlyUrl: 'w3.org/XML' },
    { image: 'dist/skill-jquery.jpg', title: 'jQuery', fullUrl: 'https://jquery.com/', friendlyUrl: 'jquery.com' },
    { image: 'dist/skill-node.jpg', title: 'Node.js', fullUrl: 'https://nodejs.org/', friendlyUrl: 'nodejs.org' },
    { image: 'dist/skill-react.jpg', title: 'React', fullUrl: 'https://facebook.github.io/react/', friendlyUrl: 'facebook.github.io/react' },
    { image: 'dist/skill-aurelia.jpg', title: 'Aurelia', fullUrl: 'http://aurelia.io/', friendlyUrl: 'aurelia.io' },
    { image: 'dist/skill-breeze.jpg', title: 'Breeze', fullUrl: 'http://www.getbreezenow.com/', friendlyUrl: 'getbreezenow.com' },
    { image: 'dist/skill-flux.jpg', title: 'Flux', fullUrl: 'https://facebook.github.io/flux/', friendlyUrl: 'facebook.github.io/flux' },
    { image: 'dist/skill-knockout.jpg', title: 'Knockout', fullUrl: 'http://knockoutjs.com/', friendlyUrl: 'knockoutjs.com' },
    { image: 'dist/skill-less.jpg', title: 'Less', fullUrl: 'http://lesscss.org/', friendlyUrl: 'lesscss.org' },
    { image: 'dist/skill-sass.jpg', title: 'Sass', fullUrl: 'http://sass-lang.com/', friendlyUrl: 'sass-lang.com' },
    { image: 'dist/skill-aws.jpg', title: 'AWS', fullUrl: 'https://aws.amazon.com/', friendlyUrl: 'aws.amazon.com' },
    { image: 'dist/skill-docker.jpg', title: 'Docker', fullUrl: 'https://www.docker.com/', friendlyUrl: 'docker.com' },
    { image: 'dist/skill-bower.jpg', title: 'Bower', fullUrl: 'https://bower.io/', friendlyUrl: 'bower.io' },
    { image: 'dist/skill-gulp.jpg', title: 'Gulp', fullUrl: 'http://gulpjs.com/', friendlyUrl: 'gulpjs.com' },
    { image: 'dist/skill-jira.jpg', title: 'JIRA', fullUrl: 'https://www.atlassian.com/software/jira', friendlyUrl: 'atlassian.com/jira' },
    { image: 'dist/skill-bitbucket.jpg', title: 'Bitbucket', fullUrl: 'https://www.atlassian.com/software/bitbucket', friendlyUrl: 'atlassian.com/bitbucket' },
    { image: 'dist/skill-apache.jpg', title: 'Apache', fullUrl: 'https://www.apache.org/', friendlyUrl: 'apache.org' },
    { image: 'dist/skill-mysql.jpg', title: 'MySQL', fullUrl: 'https://www.mysql.com/', friendlyUrl: 'mysql.com' },
    { image: 'dist/skill-nhibernate.jpg', title: 'NHibernate', fullUrl: 'http://nhibernate.info/', friendlyUrl: 'nhibernate.info' }
];