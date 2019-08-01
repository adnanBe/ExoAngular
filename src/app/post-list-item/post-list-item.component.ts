import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  getColor(): string {
    if (this.post.loveIts > 0) {
      return 'green';
    } else if (this.post.loveIts < 0) {
      return 'red';
    }
  }

  setLoveIt(isLoveIt: boolean) {
    if (isLoveIt) {
      this.post.loveIts++;
    } else {
      this.post.loveIts--;
    }
  }

  ngOnInit() {
  }

}
