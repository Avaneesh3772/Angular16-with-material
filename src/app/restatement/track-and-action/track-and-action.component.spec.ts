import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackAndActionComponent } from './track-and-action.component';

describe('TrackAndActionComponent', () => {
  let component: TrackAndActionComponent;
  let fixture: ComponentFixture<TrackAndActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackAndActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackAndActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
