import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-post-save-data-form',
  templateUrl: './post-save-data-form.component.html',
  styleUrls: ['./post-save-data-form.component.css']
})
export class PostSaveDataFormComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  post = {
    id: null,
    title: '',
    body: ''
  };


  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) { }


  ngOnInit() {
    this.constroiForm();
    this.buscaDados();
  }

  // insert
  constroiForm() {
    this.form = new FormGroup({
      title: new FormControl(''),
      body: new FormControl(''),
    });
  }

  buscaDados() {
    this.route.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.postService.find(+params['id'])
          .subscribe(data => {
              this.post = data;
              this.populaDadosForm(this.post);
            });
      }
    });
  }

  populaDadosForm(post) {
    if (post !== null) {
      this.form.patchValue({
        title: post.title,
        body: post.body
      });
    }
  }

  save() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }

    console.log(this.form);

    this.post.title = this.form.value.title;
    this.post.body = this.form.value.body;

    console.log(this.post);

    this.postService.save(this.post)
      .subscribe(() => {
        this.messageService.message = 'Post salvo com sucesso';
        this.router.navigate(['/posts']);
      });
  }
}
