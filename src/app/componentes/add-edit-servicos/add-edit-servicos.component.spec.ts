import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditServicosComponent } from './add-edit-servicos.component';

describe('AddEditServicosComponent', () => {
  let component: AddEditServicosComponent;
  let fixture: ComponentFixture<AddEditServicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditServicosComponent]
    });
    fixture = TestBed.createComponent(AddEditServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
