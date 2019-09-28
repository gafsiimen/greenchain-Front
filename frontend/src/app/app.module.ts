import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DevenirTrieurComponent } from './components/devenir-trieur/devenir-trieur.component';
import { FileSaverModule } from 'ngx-filesaver';
import { FormsModule } from '@angular/forms';
import { DevenirCoachComponent } from './components/devenir-coach/devenir-coach.component';
// import { RegisterCoachComponent } from './components/register-coach/register-coach.component';
import { BoutiqueComponent } from './components/boutique/boutique.component';
// import { UsersComponent } from './components/users/users.component';
// import { UserComponent } from './components/users/user/user.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';
import { TrieurDashboardComponent } from './components/trieur-dashboard/trieur-dashboard.component';
import { AuthedNavbarComponent } from './components/authed-navbar/authed-navbar.component';
import { AuthGuard } from './guards/auth.guard';
import { CoachRoleGuard } from './guards/coach-role.guard';
import { CommentMarcheComponent } from './components/comment-marche/comment-marche.component';
import { PanierComponent } from './components/panier/panier.component';
import { RewardComponent } from './components/reward/reward.component';
import { DistributionComponent } from './components/distribution/distribution.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PersonalCoachComponent } from './components/personal-coach/personal-coach.component';
import { RegisterGuard } from './guards/register.guard';
import { TrieurRoleGuard } from './guards/trieur-role.guard';
import { ContactComponent } from './components/contact/contact.component';
import { AgmCoreModule } from '@agm/core';
import { UnauthedNavbarComponent } from './components/unauthed-navbar/unauthed-navbar.component';
import { UnauthedFooterComponent } from './components/unauthed-footer/unauthed-footer.component';
import { RegisterCoachComponent } from './components/register-coach/register-coach.component';
import { ExpiredAuthGuard } from './guards/expired-auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DevenirTrieurComponent,
    DevenirCoachComponent,
    BoutiqueComponent,
    ProductComponent,
    RegisterComponent,
    RegisterCoachComponent,
    TrieurDashboardComponent,
    AuthedNavbarComponent,
    CommentMarcheComponent,
    PanierComponent,
    RewardComponent,
    DistributionComponent,
    ProfileComponent,
    PersonalCoachComponent,
    ContactComponent,
    UnauthedNavbarComponent,
    UnauthedFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FileSaverModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAPvQbgO-S08LfcT86a6fDkDNwNdmomiXY'
      // AIzaSyD0KSACDq5KurjlsNUHIf3DJAzt6z4tshY
    })

  ],
  providers: [AuthGuard,CoachRoleGuard,RegisterGuard,TrieurRoleGuard,ExpiredAuthGuard], 
  bootstrap: [AppComponent],
  schemas :[ NO_ERRORS_SCHEMA]
})
export class AppModule { }
