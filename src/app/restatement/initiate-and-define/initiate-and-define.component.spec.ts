import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiateAndDefineComponent } from './initiate-and-define.component';

describe('InitiateAndDefineComponent', () => {
  let component: InitiateAndDefineComponent;
  let fixture: ComponentFixture<InitiateAndDefineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitiateAndDefineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiateAndDefineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
