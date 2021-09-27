import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastreAcaoComponent } from './cadastre-acao.component';

describe('CadastreAcaoComponent', () => {
  let component: CadastreAcaoComponent;
  let fixture: ComponentFixture<CadastreAcaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastreAcaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastreAcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
