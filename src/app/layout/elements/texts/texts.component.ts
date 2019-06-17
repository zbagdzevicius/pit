import { Component, OnInit, Input } from '@angular/core';
import { Text } from 'src/app/core/models/policy/text.model';

@Component({
  selector: 'app-texts',
  templateUrl: './texts.component.html',
  styleUrls: ['./texts.component.scss']
})
export class TextsComponent implements OnInit {
  @Input() text: Text;
  type;

  constructor() {
    if (this.text){
      this.type = Object.keys(this.text)[0];
    }
  }

  ngOnInit() {
  }

}
