import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailCreativesComponent } from './email-creatives.component';

describe('EmailCreativesComponent', () => {
  let component: EmailCreativesComponent;
  let fixture: ComponentFixture<EmailCreativesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailCreativesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailCreativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
