import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserDetailComponent } from './edit-user-detail.component';

describe('EditUserDetailComponent', () => {
  let component: EditUserDetailComponent;
  let fixture: ComponentFixture<EditUserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
