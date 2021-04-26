import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHeaderWithSortComponent } from './search-header-with-sort.component';

describe('SearchHeaderWithSortComponent', () => {
  let component: SearchHeaderWithSortComponent;
  let fixture: ComponentFixture<SearchHeaderWithSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchHeaderWithSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHeaderWithSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
