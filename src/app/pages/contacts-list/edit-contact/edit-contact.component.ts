import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormGroup,
  FormBuilder,
  AbstractControl
} from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
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
    ) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      isFavorite: [false],
      name: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      phone: [],
      id: [],
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

  openModal(): void {
    this.modalShowing = true;
  }

  closeModal(): void {
    this.modalShowing = false;
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
      this.closeModal();
    }
  }
}
