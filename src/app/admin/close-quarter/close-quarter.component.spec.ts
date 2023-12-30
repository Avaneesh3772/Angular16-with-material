import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseQuarterComponent } from './close-quarter.component';

describe('CloseQuarterComponent', () => {
  let component: CloseQuarterComponent;
  let fixture: ComponentFixture<CloseQuarterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseQuarterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseQuarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
