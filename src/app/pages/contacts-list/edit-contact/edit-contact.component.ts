import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent {

  public modalShowing = false;

  constructor() { }

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

}
