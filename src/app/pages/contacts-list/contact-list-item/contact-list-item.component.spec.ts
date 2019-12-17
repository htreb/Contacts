import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactListItemComponent } from './contact-list-item.component';
import { By } from '@angular/platform-browser';

describe('ContactListItemComponent', () => {
  let component: ContactListItemComponent;
  let fixture: ComponentFixture<ContactListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactListItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListItemComponent);
    component = fixture.componentInstance;
    component.contact = {
      id: '123456',
      isFavorite: false,
      name: 'Bob McFakeName',
      email: 'Bob@email.com',
      phone: '123456789'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should display contacts name', () => {
    fixture.detectChanges();
    const nameContainer = fixture.debugElement.query(By.css('.name'));
    expect(nameContainer.nativeElement.textContent).toBe('Bob McFakeName');
  });

  it('Should display contacts email', () => {
    fixture.detectChanges();
    const nameContainer = fixture.debugElement.query(By.css('.email'));
    expect(nameContainer.nativeElement.textContent).toBe('Bob@email.com');
  });

  it('Should display contacts phone', () => {
    fixture.detectChanges();
    const nameContainer = fixture.debugElement.query(By.css('.phone'));
    expect(nameContainer.nativeElement.textContent).toBe('123456789');
  });

});
