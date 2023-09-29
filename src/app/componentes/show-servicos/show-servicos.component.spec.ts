import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowServicosComponent } from './show-servicos.component';

describe('ShowServicosComponent', () => {
  let component: ShowServicosComponent;
  let fixture: ComponentFixture<ShowServicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowServicosComponent]
    });
    fixture = TestBed.createComponent(ShowServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
