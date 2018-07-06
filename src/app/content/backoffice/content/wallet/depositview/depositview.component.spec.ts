import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositviewComponent } from './depositview.component';

describe('DepositviewComponent', () => {
  let component: DepositviewComponent;
  let fixture: ComponentFixture<DepositviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
