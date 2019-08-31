import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArchiveComponent } from './components/archive/archive.component'
import { HomeComponent } from './components/home/home.component'
import { BadgesComponent } from './components/badges/badges.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'archive', component: ArchiveComponent },
    { path: 'badges', component: BadgesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

export const RoutingComponents = [ HomeComponent, ArchiveComponent, BadgesComponent ]