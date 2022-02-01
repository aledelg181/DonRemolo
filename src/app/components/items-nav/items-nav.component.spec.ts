import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsNavComponent } from './items-nav.component';

describe('ItemsNavComponent', () => {
  let component: ItemsNavComponent;
  let fixture: ComponentFixture<ItemsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
