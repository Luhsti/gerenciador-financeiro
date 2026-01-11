import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    loadChildren: () => import('./features/home/routes') /* importo as rotas do componente do aplicativo */
}];
