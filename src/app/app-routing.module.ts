import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { DocsComponent } from './docs/docs.component';
import { EventsComponent } from './events/events.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'docs',component:DocsComponent},
  {path:'events',component:EventsComponent},
  {path:'features',component:FeaturesComponent},
  {path:'resources',component:ResourcesComponent},
  {path:'blog',component:BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
