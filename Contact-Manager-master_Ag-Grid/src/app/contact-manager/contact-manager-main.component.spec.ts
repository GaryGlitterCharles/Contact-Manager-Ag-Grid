import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactManagerMainComponent } from './contact-manager-main.component';

describe('ContactManagerMainComponent', () => {
  let component: ContactManagerMainComponent;
  let fixture: ComponentFixture<ContactManagerMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactManagerMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactManagerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
