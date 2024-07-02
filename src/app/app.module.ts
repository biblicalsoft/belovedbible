import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular'; // Import IonicModule
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Import the routing module if you have one
import { BibleService } from './bible/bible.service'; // Ensure the correct path
import { provideHttpClient } from '@angular/common/http'; // Importing the correct provider
import { Storage } from '@ionic/storage-angular';

@NgModule({
  declarations: [
    AppComponent,
    // Other components
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), // Add IonicModule with forRoot() method
    AppRoutingModule, // Import your routing module
    // Other modules
  ],
  providers: [
    provideHttpClient(), // Correctly setup the HttpClient provider
    BibleService, // Provide your service if not using providedIn: 'root'
    Storage,
    // Other services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
