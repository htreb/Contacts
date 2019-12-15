import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditContactComponent } from './edit-contact.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('EditContactComponent', () => {
  let component: EditContactComponent;
  let fixture: ComponentFixture<EditContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditContactComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
