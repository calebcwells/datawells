import './polyfills';
import 'bootstrap';
import './assets/styles/site.css';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

declare var module: any;

if (module.hot) {
    module.hot.accept();
} else {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
