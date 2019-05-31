import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/core/models/translate/question.model';
import { ContactBy } from 'src/app/core/models/translate/contact-by.model';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {
  @Input() questions: Question[];
  @Input() contactBy: ContactBy[];

  constructor() { }

  ngOnInit() {
  }

}
