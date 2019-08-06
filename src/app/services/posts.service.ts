import { Injectable } from '@angular/core';
import { Post } from '../post';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts = Array<Post>();
  postsSubject =  new Subject<Post[]>();

  constructor(private httpClient: HttpClient) {
    this.getPostFromServer();
  }

  /**
   * emit Post
   */
  emitPostsSubject() {
    this.postsSubject.next(this.posts);
  }

  /**
   * Ajout d'un nouveau post
   */
  savePostsOnServer(post?: Post) {
    if (post) {
      this.posts.push(post);
    }
    this.httpClient
    .put('https://http-client-demo-2c718.firebaseio.com/posts.json', this.posts)
    .subscribe(
      () => {
        console.log('Posts sauvgradés');
        this.emitPostsSubject();
      },
      (error) => {
        console.log('Une erreur s\'est produit');
      }
    );
  }

  /**
   * Récupéré les posts depuis le serveur
   */
  getPostFromServer() {
    this.httpClient
    .get<any[]>('https://http-client-demo-2c718.firebaseio.com/posts.json')
    .subscribe(
      (response) => {
        this.posts = response;
        this.emitPostsSubject();
      },
      (error) => {
        console.log('Une erreur s\'est produit');
      }
    );
  }

  /**
   * Supprimer un post par index
   */
  deletePost(index: number) {
    this.posts.splice(index, 1);
    this.savePostsOnServer();
  }

  /**
   * Mettre à jour un post
   */
  updateLike(id: number, nbLike: number) {
    this.posts[id].loveIts = nbLike;
    this.savePostsOnServer();
  }
}
