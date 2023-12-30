import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestatementComponent } from './restatement.component';

describe('RestatementComponent', () => {
  let component: RestatementComponent;
  let fixture: ComponentFixture<RestatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
