import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomogeneityMeanMatchedComponent } from './homogeneity-mean-matched.component';

describe('HomogeneityMeanMatchedComponent', () => {
  let component: HomogeneityMeanMatchedComponent;
  let fixture: ComponentFixture<HomogeneityMeanMatchedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomogeneityMeanMatchedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomogeneityMeanMatchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
