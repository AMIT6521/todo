import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Home } from '@angular/router/Home';
import {Details } from '/Details';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [Home, Details]