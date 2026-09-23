import { Routes } from '@angular/router';
import { LogginComponent } from './pages/loggin-component/loggin-component';
import { CounterPageComponent } from './pages/counter-page-component/counter-page-component';
import { UsuariosComponent } from './pages/usuario-component/usuarios-component';
import { HeroPageComponent } from './pages/hero-page-component/hero-page-component';
import { DragonballPageComponent } from './pages/dragonball-page-component/dragonball-page-component';

export const routes: Routes = [
    {
        path: '',
        component: LogginComponent
    },
    {
        path: 'all',
        component: UsuariosComponent
    },
    {
        path: 'counter',
        component: CounterPageComponent
    },
    {
        path: 'hero',
        component: HeroPageComponent
    },
    {
        path: 'dragonball',
        component: DragonballPageComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
