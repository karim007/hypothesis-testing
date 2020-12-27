import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConformityComponent } from './conformity.component';

describe('ConformityComponent', () => {
  let component: ConformityComponent;
  let fixture: ComponentFixture<ConformityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConformityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConformityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
