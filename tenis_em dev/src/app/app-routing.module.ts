import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./page/user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./page/produtos/produtos.module').then( m => m.ProdutosPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./page/info/info.module').then( m => m.InfoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
