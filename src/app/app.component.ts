import { Component } from '@angular/core';

export class Mash {
  leftCat: Cat;
  rightCat: Cat;
}

export class Cat {
  id: string;
  imageSource: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App';
  mash: Mash = {
    leftCat: {
      id: "sdsd",
      imageSource: "http://24.media.tumblr.com/tumblr_m82woaL5AD1rro1o5o1_1280.jpg"
    },
    rightCat: {
      id: "dsds",
      imageSource: "http://24.media.tumblr.com/tumblr_m29a9d62C81r2rj8po1_500.jpg"
    }
  };
}
