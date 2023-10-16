import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarServicosComponent } from './editar-servicos.component';

describe('EditarServicosComponent', () => {
  let component: EditarServicosComponent;
  let fixture: ComponentFixture<EditarServicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarServicosComponent]
    });
    fixture = TestBed.createComponent(EditarServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
