import './polyfills';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

if (process.env.CORE !== 'Development') {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

declare var module: any;

if (module.hot) {
    module.hot.accept();
}
