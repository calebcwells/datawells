using System.Collections.Generic;
using DataWells.Models;
using Microsoft.AspNetCore.Mvc;

namespace DataWells.Controllers
{
    [Route("api/[controller]")]
    public class SkillsController : Controller
    {
        private readonly List<Skill> _skillList = new List<Skill>(new[]
        {
            new Skill("Primary", "dist/skill-dotnet.jpg", ".NET", "https://www.microsoft.com/net", "microsoft.com/net"),
            new Skill("Primary", "dist/skill-angular2.jpg", "Angular 2", "https://angular.io/", "angular.io"),
            new Skill("Primary", "dist/skill-typescript.jpg", "TypeScript", "https://www.typescriptlang.org/",
                "typescriptlang.org"),
            new Skill("Primary", "dist/skill-ps.jpg", "Photoshop", "http://www.adobe.com/products/photoshop.html",
                "adobe.com/photoshop"),
            new Skill("Primary", "dist/skill-rxjs.jpg", "RxJS", "http://reactivex.io/rxjs/", "reactivex.io/rxjs"),
            new Skill("Primary", "dist/skill-webpack.jpg", "Webpack", "https://webpack.js.org/", "webpack.js.org"),
            new Skill("Primary", "dist/skill-html5.jpg", "HTML 5", "https://www.w3.org/TR/html5/", "w3.org/html5"),
            new Skill("Primary", "dist/skill-css3.jpg", "CSS 3",
                "https://www.w3.org/TR/2014/REC-css-namespaces-3-20140320/", "w3.org/css3"),
            new Skill("Primary", "dist/skill-javascript.jpg", "JavaScript", "https://www.javascript.com/",
                "javascript.com"),
            new Skill("Primary", "dist/skill-json.jpg", "JSON", "http://www.json.org/", "json.org"),
            new Skill("Primary", "dist/skill-mdl.jpg", "Material Design", "https://material.io/", "material.io"),
            new Skill("Primary", "dist/skill-bootstrap.jpg", "Bootstrap", "http://getbootstrap.com/", "getbootstrap.com"),
            new Skill("Primary", "dist/skill-ef.jpg", "Entity Framework", "https://docs.microsoft.com/en-us/ef/",
                "docs.microsoft.com/ef"),
            new Skill("Primary", "dist/skill-sql.jpg", "SQL", "https://www.microsoft.com/en-us/sql-server/",
                "microsoft.com/sql-server"),
            new Skill("Primary", "dist/skill-npm.jpg", "NPM", "https://www.npmjs.com/", "npmjs.com"),
            new Skill("Primary", "dist/skill-git.jpg", "Git", "https://git-scm.com/", "git-scm.com"),
            new Skill("Primary", "dist/skill-sourcetree.jpg", "SourceTree", "https://www.sourcetreeapp.com/",
                "sourcetreeapp.com"),
            new Skill("Primary", "dist/skill-github.jpg", "Github", "https://github.com/", "github.com"),
            new Skill("Primary", "dist/skill-azure.jpg", "Azure", "https://azure.microsoft.com/", "azure.microsoft.com"),
            new Skill("Secondary", "dist/skill-xml.jpg", "XML", "https://www.w3.org/XML/", "w3.org/XML"),
            new Skill("Secondary", "dist/skill-jquery.jpg", "jQuery", "https://jquery.com/", "jquery.com"),
            new Skill("Secondary", "dist/skill-node.jpg", "Node.js", "https://nodejs.org/", "nodejs.org"),
            new Skill("Secondary", "dist/skill-react.jpg", "React", "https://facebook.github.io/react/",
                "facebook.github.io/react"),
            new Skill("Secondary", "dist/skill-aurelia.jpg", "Aurelia", "http://aurelia.io/", "aurelia.io"),
            new Skill("Secondary", "dist/skill-breeze.jpg", "Breeze", "http://www.getbreezenow.com/", "getbreezenow.com"),
            new Skill("Secondary", "dist/skill-flux.jpg", "Flux", "https://facebook.github.io/flux/",
                "facebook.github.io/flux"),
            new Skill("Secondary", "dist/skill-knockout.jpg", "Knockout", "http://knockoutjs.com/", "knockoutjs.com"),
            new Skill("Secondary", "dist/skill-less.jpg", "Less", "http://lesscss.org/", "lesscss.org"),
            new Skill("Secondary", "dist/skill-sass.jpg", "Sass", "http://sass-lang.com/", "sass-lang.com"),
            new Skill("Secondary", "dist/skill-aws.jpg", "AWS", "https://aws.amazon.com/", "aws.amazon.com"),
            new Skill("Secondary", "dist/skill-docker.jpg", "Docker", "https://www.docker.com/", "docker.com"),
            new Skill("Secondary", "dist/skill-bower.jpg", "Bower", "https://bower.io/", "bower.io"),
            new Skill("Secondary", "dist/skill-gulp.jpg", "Gulp", "http://gulpjs.com/", "gulpjs.com"),
            new Skill("Secondary", "dist/skill-jira.jpg", "JIRA", "https://www.atlassian.com/software/jira",
                "atlassian.com/jira"),
            new Skill("Secondary", "dist/skill-bitbucket.jpg", "Bitbucket",
                "https://www.atlassian.com/software/bitbucket", "atlassian.com/bitbucket"),
            new Skill("Secondary", "dist/skill-apache.jpg", "Apache", "https://www.apache.org/", "apache.org"),
            new Skill("Secondary", "dist/skill-mysql.jpg", "MySQL", "https://www.mysql.com/", "mysql.com"),
            new Skill("Secondary", "dist/skill-nhibernate.jpg", "NHibernate", "http://nhibernate.info/",
                "nhibernate.info")
        });

        [HttpGet("[action]")]
        public List<Skill> SkillsList()
        {
            return _skillList;
        }
    }
}