import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudFilmesComponent } from './crud-filmes.component';

describe('CrudFilmesComponent', () => {
  let component: CrudFilmesComponent;
  let fixture: ComponentFixture<CrudFilmesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudFilmesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
