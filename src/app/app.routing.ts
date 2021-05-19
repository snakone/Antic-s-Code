import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

@NgModule({
  imports: [RouterModule.forRoot(
    ROUTES, { scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' }
  )],
  exports: [RouterModule]
})

export class AppRoutingModule { }
