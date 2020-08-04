import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../models/contact';
import { ContactService } from '../../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  model = new Contact();

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.model.email = '';
    this.model.message = '';
    this.model.name = '';
    this.model.phone = '';
    this.model.subject = '';
  }

  onSubmit() {
    alert("Submit Clicked!")
    this.contactService.postContact(this.model).subscribe(data => {
      //response
      console.log(data);
    })
  }

  get diagnostic() { return JSON.stringify(this.model); }
}
