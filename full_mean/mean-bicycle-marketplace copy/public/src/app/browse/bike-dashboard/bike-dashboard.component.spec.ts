import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeDashboardComponent } from './bike-dashboard.component';

describe('BikeDashboardComponent', () => {
  let component: BikeDashboardComponent;
  let fixture: ComponentFixture<BikeDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
