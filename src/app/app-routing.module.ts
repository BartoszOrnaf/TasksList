import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component'


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'archive',
    loadChildren: './archive/archive.module#ArchiveModule' },
    { path: 'badges',
    loadChildren: './badges/badges.module#BadgesModule' }
    ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

export const RoutingComponents = [ HomeComponent ]