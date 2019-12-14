import { Component, Input } from '@angular/core';
import { Contact, ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.scss']
})
export class ContactListItemComponent {

  @Input() contact: Contact;

  constructor(private contactService: ContactService) { }

  onFavoriteClicked(ev: MouseEvent) {
    ev.stopPropagation();
    ev.preventDefault();
    this.contactService.toggleFavorite(this.contact);
  }
}
