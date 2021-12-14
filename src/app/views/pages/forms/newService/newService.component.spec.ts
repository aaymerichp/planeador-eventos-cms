import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewServiceComponent} from './newService.component';

describe('NewProductComponent', () => {
  let component: NewServiceComponent;
  let fixture: ComponentFixture<NewServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
