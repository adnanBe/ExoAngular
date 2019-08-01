import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = Array<Post>();

  constructor() {
    this.posts.push(new Post('Mon premier post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 0));
    this.posts.push(new Post('Mon Deuxième post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 0));
    this.posts.push(new Post('Encore un post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 0));
  }
}
