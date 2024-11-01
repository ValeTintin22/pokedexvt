import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokebusComponentComponent } from '/pokebus-component.component';

describe('PokebusComponentComponent', () => {
  let component: PokebusComponentComponent;
  let fixture: ComponentFixture<PokebusComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokebusComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokebusComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
