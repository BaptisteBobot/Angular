import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular';
  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyAFpiOLnFDa9RaO6ycM2PK8Fc87n3Qm4nM",
      authDomain: "angularend.firebaseapp.com",
      databaseURL: "https://angularend.firebaseio.com",
      projectId: "angularend",
      storageBucket: "angularend.appspot.com",
      messagingSenderId: "514898815650",
      appId: "1:514898815650:web:3ce106078702ed79"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
