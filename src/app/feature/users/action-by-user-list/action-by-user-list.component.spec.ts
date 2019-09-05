import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionByUserListComponent } from './action-by-user-list.component';

describe('ActionByUserListComponent', () => {
  let component: ActionByUserListComponent;
  let fixture: ComponentFixture<ActionByUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionByUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionByUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
