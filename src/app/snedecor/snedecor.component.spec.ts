import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnedecorComponent } from './snedecor.component';

describe('SnedecorComponent', () => {
  let component: SnedecorComponent;
  let fixture: ComponentFixture<SnedecorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnedecorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnedecorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
