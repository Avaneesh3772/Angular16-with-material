import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPostCommentsComponent } from './dialog-post-comments.component';

describe('DialogPostCommentsComponent', () => {
  let component: DialogPostCommentsComponent;
  let fixture: ComponentFixture<DialogPostCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPostCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPostCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
