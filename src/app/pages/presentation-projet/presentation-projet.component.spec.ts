import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationProjetComponent } from './presentation-projet.component';

describe('PresentationProjetComponent', () => {
  let component: PresentationProjetComponent;
  let fixture: ComponentFixture<PresentationProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationProjetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
