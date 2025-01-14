import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationEtudiantsComponent } from './presentation-etudiants.component';

describe('PresentationEtudiantsComponent', () => {
  let component: PresentationEtudiantsComponent;
  let fixture: ComponentFixture<PresentationEtudiantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationEtudiantsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationEtudiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
