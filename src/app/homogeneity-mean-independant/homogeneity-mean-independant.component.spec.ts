import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomogeneityMeanIndependantComponent } from './homogeneity-mean-independant.component';

describe('HomogeneityMeanIndependantComponent', () => {
  let component: HomogeneityMeanIndependantComponent;
  let fixture: ComponentFixture<HomogeneityMeanIndependantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomogeneityMeanIndependantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomogeneityMeanIndependantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
