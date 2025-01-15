import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificationTechniquesComponent } from './specification-techniques.component';

describe('SpecificationTechniquesComponent', () => {
  let component: SpecificationTechniquesComponent;
  let fixture: ComponentFixture<SpecificationTechniquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecificationTechniquesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificationTechniquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
