import { Component, ViewChild, OnInit } from '@angular/core';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ContactService, Contact } from 'src/app/services/contact.service';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  @ViewChild(EditContactComponent, { static: false })
  editContactModal: EditContactComponent;
  private searchTerm$ = new BehaviorSubject<string>('');
  public filteredContacts$: Observable<Contact[]>;
  public favoriteContacts$: Observable<Contact[]>;

  constructor(public contactService: ContactService) {}

  ngOnInit() {
    this.filteredContacts$ = combineLatest([
      this.contactService.allContacts$,
      this.searchTerm$
    ]).pipe(
      map(([allContacts, searchTerm]) => {
        // By stringifying the contact we can easily search all fields: name, email, phone... in one search;
        return allContacts.filter(
          c =>
            JSON.stringify(c)
              .toLowerCase()
              .indexOf(searchTerm.toLowerCase()) > -1
        );
      })
    );
    this.favoriteContacts$ = this.filteredContacts$.pipe(
      map((orderedContacts: Contact[]) => orderedContacts.filter(c => c.isFavorite))
    );
  }

  updateSearchTerm(searchTerm: string) {
    this.searchTerm$.next(searchTerm);
  }

  clearSearch(searchBar: HTMLInputElement) {
    searchBar.value = '';
    this.updateSearchTerm('');
  }

  openEditContactModal(contact?: Contact): void {
    this.editContactModal.openModal(contact);
  }
}
