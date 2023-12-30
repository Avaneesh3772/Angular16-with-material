import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogNotAuthorizedComponent } from './shared/components/dialog-not-authorized/dialog-not-authorized.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AuthTokenInterceptor } from './shared/http-interceptor/auth-token.interceptor';
import { AngularMaterialModule } from './shared/modules/AngularMaterial.module';
import { SharedModule } from './shared/modules/shared.module';
import { AppInitializerDataService } from './shared/services/app-initializer-data.service';

// import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export function initApp(appInitializerDataService: AppInitializerDataService) {
  return function(): Promise<any> {
    return appInitializerDataService.AppConfigartionData();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent, 
    HeaderComponent,
    FooterComponent,
    DialogNotAuthorizedComponent       
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
    SharedModule    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [AppInitializerDataService],
      multi: true
    },
     /* {
       provide: LocationStrategy, useClass: HashLocationStrategy
     } */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
