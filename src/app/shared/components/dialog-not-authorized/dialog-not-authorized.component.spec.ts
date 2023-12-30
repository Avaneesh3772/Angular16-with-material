import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNotAuthorizedComponent } from './dialog-not-authorized.component';

describe('DialogNotAuthorizedComponent', () => {
  let component: DialogNotAuthorizedComponent;
  let fixture: ComponentFixture<DialogNotAuthorizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNotAuthorizedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNotAuthorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
