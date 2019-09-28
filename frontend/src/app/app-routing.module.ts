import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DevenirTrieurComponent } from './components/devenir-trieur/devenir-trieur.component';
import { DevenirCoachComponent } from './components/devenir-coach/devenir-coach.component';
// import { RegisterCoachComponent } from './components/register-coach/register-coach.component';
import { BoutiqueComponent } from './components/boutique/boutique.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { CoachRoleGuard } from './guards/coach-role.guard';
import { TrieurDashboardComponent } from './components/trieur-dashboard/trieur-dashboard.component';
import { CommentMarcheComponent } from './components/comment-marche/comment-marche.component';
import { PanierComponent } from './components/panier/panier.component';
import { RewardComponent } from './components/reward/reward.component';
import { DistributionComponent } from './components/distribution/distribution.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PersonalCoachComponent } from './components/personal-coach/personal-coach.component';
import { RegisterGuard } from './guards/register.guard';
import { TrieurRoleGuard } from './guards/trieur-role.guard';
import { ContactComponent } from './components/contact/contact.component';
import { AuthedNavbarComponent } from './components/authed-navbar/authed-navbar.component';
import { RegisterCoachComponent } from './components/register-coach/register-coach.component';
import { ExpiredAuthGuard } from './guards/expired-auth.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  { path: 'devenir-trieur', component: DevenirTrieurComponent },
  { path: 'devenir-coach', component: DevenirCoachComponent },
  { path: 'comment-ca-marche', component: CommentMarcheComponent },
  { path: 'register', 
  canActivate: [RegisterGuard],
  component: RegisterComponent },
  { path: 'register-coach', 
  canActivate: [ExpiredAuthGuard,TrieurRoleGuard],
  component: RegisterCoachComponent },
  
  {
    path: 'boutique',
    // canActivate: [CoachRoleGuard],
    component: BoutiqueComponent
  },
  { path: 'boutique/catalog', component: BoutiqueComponent },
  { path: 'boutique/:id', component: ProductComponent },
  {
    path: 'panier',
    canActivate: [ExpiredAuthGuard],
    component: PanierComponent
  },

  {
    path: 'trieur-dashboard',
    canActivate: [ExpiredAuthGuard],
    component: TrieurDashboardComponent
  },

  {
    path: 'rewards',
    canActivate: [ExpiredAuthGuard],
    component: RewardComponent
  },

  {
    path: 'distribution',
    canActivate: [ExpiredAuthGuard],
    component: DistributionComponent
  },
  {
    path: 'distribution/:type',
    canActivate: [ExpiredAuthGuard],
    component: DistributionComponent
  },  

{
    path: 'profile',
    canActivate: [ExpiredAuthGuard],
    component: ProfileComponent
  },  
{
    path: 'personal-coach',
    canActivate: [ExpiredAuthGuard,
      // TrieurRoleGuard
    ],
    component: PersonalCoachComponent
  },  

  {
    path: 'contact',
    canActivate: [ExpiredAuthGuard],
    component: ContactComponent
  },  
  {
    path: 'exit',
    
    component: AuthedNavbarComponent
  },  


  { path: "**", redirectTo: '/' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
