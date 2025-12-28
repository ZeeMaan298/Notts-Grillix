import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerFries } from './burger-fries';

describe('BurgerFries', () => {
  let component: BurgerFries;
  let fixture: ComponentFixture<BurgerFries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BurgerFries]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerFries);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
