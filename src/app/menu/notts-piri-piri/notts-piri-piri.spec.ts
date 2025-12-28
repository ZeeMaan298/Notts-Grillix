import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NottsPiriPiri } from './notts-piri-piri';

describe('NottsPiriPiri', () => {
  let component: NottsPiriPiri;
  let fixture: ComponentFixture<NottsPiriPiri>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NottsPiriPiri]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NottsPiriPiri);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
