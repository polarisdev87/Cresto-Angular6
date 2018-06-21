import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationNoticeComponent } from './verification-notice.component';

describe('VerificationNoticeComponent', () => {
  let component: VerificationNoticeComponent;
  let fixture: ComponentFixture<VerificationNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
