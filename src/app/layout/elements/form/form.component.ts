import { Component, OnInit, Input } from '@angular/core';
import { Form } from 'src/app/core/models/translate/form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() form: Form;

  constructor() {
  }

  ngOnInit() {
  }

}
