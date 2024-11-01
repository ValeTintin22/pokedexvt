import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokenComponent } from './poken.component';

describe('PokenComponent', () => {
  let component: PokenComponent;
  let fixture: ComponentFixture<PokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
