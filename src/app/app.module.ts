import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any> {
    'pinch': { enable: false },
    'rotate': { enable: false }
  }
}

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { JoinPageComponent } from './join-page/join-page.component';
import { JoinFormComponent } from './join-form/join-form.component';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';

import { AdminModule } from './admin/admin.module';
import { LoginRoutingModule } from './admin/login-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavHeaderComponent,
    SocialLinksComponent,
    SlideshowComponent,
    AboutPageComponent,
    JoinPageComponent,
    JoinFormComponent,
    CalendarPageComponent,
    ReversePipe,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    FormsModule,
    HttpModule,
    LoginRoutingModule,
    AdminModule,
    RouterModule.forRoot([
      {
        path: '',
        component: MainComponent
      },
      {
        path: 'about',
        component: AboutPageComponent
      },
      {
        path: 'join',
        component: JoinPageComponent
      },
      {
        path: 'calendar',
        component: CalendarPageComponent
      },
      {
        path: 'login',
        component: AdminLoginComponent
      }
    ])
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
