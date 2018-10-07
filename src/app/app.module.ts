import { MessageService } from './services/message.service';
import { PostService } from './services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PostSaveComponent } from './post-save/post-save.component';
import { ButtonComponent } from './bootstrap/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GlyphComponent } from './bootstrap/glyph/glyph.component';
import { ModalComponent } from './bootstrap/modal/modal.component';
import { AlertComponent } from './bootstrap/alert/alert.component';
import { PostSaveDataFormComponent } from './post-save-data-form/post-save-data-form.component';
import { DevComponent } from './dev/dev.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';



const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: PostListComponent },
  { path: 'posts',  component: PostListComponent },
  { path: 'posts/create',  component: PostSaveComponent },
  { path: 'posts/:id/edit',  component: PostSaveDataFormComponent },
  { path: 'posts/create-data-form', component: PostSaveDataFormComponent},
  { path: 'dev', component: DevComponent},
  { path: 'parent', component: ParentComponent},
  { path: 'parent/child', component: ChildComponent}
];


@NgModule({
   declarations: [
      AppComponent,
      PostListComponent,
      PostSaveComponent,
      ButtonComponent,
      GlyphComponent,
      ModalComponent,
      AlertComponent,
      PostSaveDataFormComponent,
      DevComponent,
      ParentComponent,
      ChildComponent
   ],
   imports: [
      BrowserModule,
      RouterModule,
      RouterModule.forRoot(appRoutes),
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
   ],
   exports: [
      RouterModule
   ],
   providers: [
      PostService,
      MessageService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
