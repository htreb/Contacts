import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormGroup,
  FormBuilder,
  AbstractControl
} from '@angular/forms';
import { ContactService, Contact } from 'src/app/services/contact.service';
@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  public modalShowing = false;
  public formDisabled = true;
  public contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      isFavorite: [false],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [],
      id: []
    });
  }

  get name(): AbstractControl {
    return this.contactForm.get('name');
  }

  get email(): AbstractControl {
    return this.contactForm.get('email');
  }

  get isFavorite(): AbstractControl {
    return this.contactForm.get('isFavorite');
  }

  openModal(contact?: Contact): void {
    if (contact) {
      this.contactForm.setValue(contact);
    } else {
      // with new contact no need to disable the form
      this.formDisabled = false;
    }
    this.modalShowing = true;
  }

  closeModal(force?: boolean): void {
    if (!force && this.contactForm.dirty) {
      const confirmClose = confirm(
        'You have unsaved changes. Are you sure you want to leave?'
      );
      if (!confirmClose) {
        return;
      }
    }
    this.modalShowing = false;
    this.formDisabled = true;
    this.contactForm.reset();
  }

  modalClicked(ev: MouseEvent): void {
    ev.stopPropagation();
    ev.preventDefault();
  }

  toggleFavorite(): void {
    if (this.formDisabled) {
      return;
    } else {
      this.contactForm.patchValue({
        isFavorite: !this.isFavorite.value
      });
      this.isFavorite.markAsDirty();
    }
  }

  deleteContact() {
    if (this.formDisabled) {
      return;
    } else {
      this.contactService.deleteContact(this.contactForm.value);
      this.closeModal(true);
    }
  }

  onEdit(): void {
    this.formDisabled = false;
  }

  onSave(): void {
    if (this.contactForm.invalid) {
      return;
    } else {
      this.contactService.saveContact(this.contactForm.value);
      this.closeModal(true);
    }
  }
}
