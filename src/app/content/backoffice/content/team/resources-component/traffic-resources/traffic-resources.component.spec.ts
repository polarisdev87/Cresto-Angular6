import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficResourcesComponent } from './traffic-resources.component';

describe('TrafficResourcesComponent', () => {
  let component: TrafficResourcesComponent;
  let fixture: ComponentFixture<TrafficResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafficResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
