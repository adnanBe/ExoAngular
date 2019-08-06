import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../post';
import { Subscription } from 'rxjs';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  @Input() items: Array<Post>;
  postsSubscription: Subscription;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (post: Post[]) => {
        this.items = post;
      }
    );
    this.postsService.emitPostsSubject();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
