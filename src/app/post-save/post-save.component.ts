import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-save',
  templateUrl: './post-save.component.html',
  styleUrls: ['./post-save.component.css']
})
export class PostSaveComponent implements OnInit {

  post = {
    id: null,
    title: '',
    body: ''
  };

  constructor(
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  save() {
    this.postService.save(this.post)
      .subscribe(() => this.router.navigate(['/posts']));
  }

}
