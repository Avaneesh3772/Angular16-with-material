import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateResourceComponent } from './dialog-create-resource.component';

describe('DialogCreateResourceComponent', () => {
  let component: DialogCreateResourceComponent;
  let fixture: ComponentFixture<DialogCreateResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCreateResourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
