import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsDashboardComponent } from './listings-dashboard.component';

describe('ListingsDashboardComponent', () => {
  let component: ListingsDashboardComponent;
  let fixture: ComponentFixture<ListingsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
