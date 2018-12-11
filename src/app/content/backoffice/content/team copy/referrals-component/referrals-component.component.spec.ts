import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralsComponentComponent } from './referrals-component.component';

describe('ReferralsComponentComponent', () => {
  let component: ReferralsComponentComponent;
  let fixture: ComponentFixture<ReferralsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
