import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormGroup,
  FormBuilder,
  FormControl,
  AbstractControl
} from '@angular/forms';
@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  public modalShowing = false;
  public formDisabled = true;
  public isFavorite = false;
  public contactForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      phone: [''],
    });
  }

  get name(): AbstractControl {
    return this.contactForm.get('name');
  }

  get email(): AbstractControl {
    return this.contactForm.get('email');
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
    this.isFavorite = !this.isFavorite;
  }

  onEdit(): void {
    this.formDisabled = !this.formDisabled;
  }
}
