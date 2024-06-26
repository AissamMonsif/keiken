import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule, provideHttpClient,withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PropositionComponent } from './proposition/proposition.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PropositionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
