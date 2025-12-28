import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonnerPizza } from './donner-pizza';

describe('DonnerPizza', () => {
  let component: DonnerPizza;
  let fixture: ComponentFixture<DonnerPizza>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonnerPizza]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonnerPizza);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
