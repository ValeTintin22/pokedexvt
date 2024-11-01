import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokesopComponent } from './pokesop.component';

describe('PokesopComponent', () => {
  let component: PokesopComponent;
  let fixture: ComponentFixture<PokesopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokesopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokesopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
