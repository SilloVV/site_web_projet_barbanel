import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PistesSuiviesComponent } from './pistes-suivies.component';

describe('PistesSuiviesComponent', () => {
  let component: PistesSuiviesComponent;
  let fixture: ComponentFixture<PistesSuiviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PistesSuiviesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PistesSuiviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
