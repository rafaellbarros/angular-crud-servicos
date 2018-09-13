import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.postService.find(+params['id'])
          .subscribe(data => this.post = data);
      }
    });
  }

  save() {
    this.postService.save(this.post)
      .subscribe(() => this.router.navigate(['/posts']));
  }

}
