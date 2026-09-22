import { Routes } from '@angular/router';
import { LogginComponent } from './loggin-component/loggin-component';
import { CounterPageComponent } from './counter-page-component/counter-page-component';
import { UsuariosComponent } from './usuario-component/usuarios-component';

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
    }
];
