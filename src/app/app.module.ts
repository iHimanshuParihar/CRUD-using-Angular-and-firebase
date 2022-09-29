import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { SchoolComponent } from './school/school.component';
import { PlacementComponent } from './placement/placement.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from "@angular/fire/compat";
import { FirestoreModule } from '@angular/fire/firestore';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    SchoolComponent,
    PlacementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    FirestoreModule,
    FormsModule,
    ReactiveFormsModule,MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
