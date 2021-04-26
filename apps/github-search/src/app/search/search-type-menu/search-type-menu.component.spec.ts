import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTypeMenuComponent } from './search-type-menu.component';

describe('SearchTypeMenuComponent', () => {
  let component: SearchTypeMenuComponent;
  let fixture: ComponentFixture<SearchTypeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTypeMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTypeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
