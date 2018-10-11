import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { GroupComponent } from './group/group.component';
import { CallbackComponent } from './callback/callback.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'class', component: GroupComponent },
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' }
];