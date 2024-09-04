import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneAmbulanzeComponent } from './gestione-ambulanze.component';

describe('GestioneAmbulanzeComponent', () => {
  let component: GestioneAmbulanzeComponent;
  let fixture: ComponentFixture<GestioneAmbulanzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestioneAmbulanzeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestioneAmbulanzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
