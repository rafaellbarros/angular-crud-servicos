import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: any = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.query()
      .subscribe(data => this.posts = data);
  }

  destroy(id, index) {
    if (confirm('Deseja excluir este post?')) {
      this.postService.destroy(+id).subscribe(() => {
        this.posts.splice(index, 1);
      });
    }
  }

}
