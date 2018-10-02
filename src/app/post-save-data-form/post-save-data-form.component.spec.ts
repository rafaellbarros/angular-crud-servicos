import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSaveDataFormComponent } from './post-save-data-form.component';

describe('PostSaveDataFormComponent', () => {
  let component: PostSaveDataFormComponent;
  let fixture: ComponentFixture<PostSaveDataFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostSaveDataFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSaveDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
