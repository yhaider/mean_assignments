import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsNewComponent } from './listings-new.component';

describe('ListingsNewComponent', () => {
  let component: ListingsNewComponent;
  let fixture: ComponentFixture<ListingsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
