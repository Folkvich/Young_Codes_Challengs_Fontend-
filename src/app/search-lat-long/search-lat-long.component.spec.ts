import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLatLongComponent } from './search-lat-long.component';

describe('SearchLatLongComponent', () => {
  let component: SearchLatLongComponent;
  let fixture: ComponentFixture<SearchLatLongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchLatLongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchLatLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
