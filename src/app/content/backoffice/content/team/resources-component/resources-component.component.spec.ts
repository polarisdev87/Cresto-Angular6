import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesComponentComponent } from './resources-component.component';

describe('ResourcesComponentComponent', () => {
  let component: ResourcesComponentComponent;
  let fixture: ComponentFixture<ResourcesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
