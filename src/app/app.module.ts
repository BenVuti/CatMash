import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgbModule }     from '@ng-bootstrap/ng-bootstrap';
import { AppComponent }  from './app.component';
import { HttpModule }    from '@angular/http';
 
import { CatMashService } from './cat-mash.service';
import { CatMashComponent } from './cat-mash/cat-mash.component';

@NgModule({
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    CatMashComponent,
  ],
  bootstrap: [ AppComponent ],
  providers: [ CatMashService ]
})
export class AppModule { }