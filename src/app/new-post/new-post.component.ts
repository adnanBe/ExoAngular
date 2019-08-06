import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../post';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  post: Post;
  postForm: FormGroup;

  constructor(private postsService: PostsService,
              private formBuilder: FormBuilder,
              private route: Router) {  }

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onAddNewPost() {
    this.post = new Post('', '', 0);
    this.post.title = this.postForm.get('title').value;
    this.post.content = this.postForm.get('content').value;
    this.postsService.savePostsOnServer(this.post);
    this.route.navigate(['/posts']);
  }

}
