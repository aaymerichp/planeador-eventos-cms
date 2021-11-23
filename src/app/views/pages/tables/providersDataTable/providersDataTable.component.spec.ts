import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidersDataTableComponent } from './providersDataTable.component';

describe('ProvidersDataTableComponent', () => {
  let component: ProvidersDataTableComponent;
  let fixture: ComponentFixture<ProvidersDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvidersDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidersDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
