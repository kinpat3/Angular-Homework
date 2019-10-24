import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopeAndLetComponent } from './scope-and-let.component';

describe('ScopeAndLetComponent', () => {
  let component: ScopeAndLetComponent;
  let fixture: ComponentFixture<ScopeAndLetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScopeAndLetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScopeAndLetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
