import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;
  @Input() index: number;

  constructor(private postsService: PostsService) { }

  /**
   * Retourne couleur de background
   */
  getColor(): string {
    if (this.post.loveIts > 0) {
      return 'green';
    } else if (this.post.loveIts < 0) {
      return 'red';
    }
  }

  /**
   * Modification le nombre de
   * J'aime er envoyer au service
   */
  setLoveIt(isLoveIt: boolean) {
    if (isLoveIt) {
      this.post.loveIts++;
    } else {
      this.post.loveIts--;
    }
    this.postsService.updateLike(this.index, this.post.loveIts);
  }

  /**
   * Supprimer un post
   */
  onDeletePost() {
    this.postsService.deletePost(this.index);
  }


  ngOnInit() {
  }

}
