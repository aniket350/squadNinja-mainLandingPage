import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider} from 'angularx-social-login';
import { IndexComponent } from './index/index.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule} from '@angular/material/sidenav';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import { MainLandingPageSPCardComponent } from './main-landing-page-spcard/main-landing-page-spcard.component';
import { IndexPageFooterComponent } from './index-page-footer/index-page-footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MainLandingPageIdeaCardComponent } from './main-landing-page-idea-card/main-landing-page-idea-card.component';
import { MatButtonModule,
         MatButtonToggleModule,
         MatIconModule,
         MatProgressSpinnerModule,
         MatToolbarModule,
         MatBadgeModule,
         MatGridListModule
 } from '@angular/material';


const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('1078204311210-1h012vmgmrncursd4tk1jtsgcn7u7s7m.apps.googleusercontent.com')
  }
]);

const Materail = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatGridListModule
];

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    IndexComponent,
    CardCarouselComponent,
    MainLandingPageSPCardComponent,
    IndexPageFooterComponent,
    MainLandingPageIdeaCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
    Materail,
    MatBadgeModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatSidenavModule,
    NgbModule,
    MDBBootstrapModule.forRoot()

  ],
  exports : [Materail],
  providers: [
    {
    provide: AuthServiceConfig,
    useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
