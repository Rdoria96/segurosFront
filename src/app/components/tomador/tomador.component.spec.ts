import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomadorComponent } from './tomador.component';

describe('TomadorComponent', () => {
  let component: TomadorComponent;
  let fixture: ComponentFixture<TomadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TomadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TomadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
