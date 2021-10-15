import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesProductComponent } from './favorites-product.component';

describe('FavoritesProductComponent', () => {
  let component: FavoritesProductComponent;
  let fixture: ComponentFixture<FavoritesProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
