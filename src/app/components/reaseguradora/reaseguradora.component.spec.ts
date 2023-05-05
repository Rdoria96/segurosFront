import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaseguradoraComponent } from './reaseguradora.component';

describe('ReaseguradoraComponent', () => {
  let component: ReaseguradoraComponent;
  let fixture: ComponentFixture<ReaseguradoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaseguradoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReaseguradoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
