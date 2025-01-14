import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationBarbanelComponent } from './presentation-barbanel.component';

describe('PresentationBarbanelComponent', () => {
  let component: PresentationBarbanelComponent;
  let fixture: ComponentFixture<PresentationBarbanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationBarbanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationBarbanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
