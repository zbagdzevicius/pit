import { Component, OnInit, Input } from '@angular/core';
import { SocialLinks } from 'src/app/core/models/translate/social-links.model';
import { LeftColumn } from 'src/app/core/models/translate/left-column.model';

@Component({
  selector: 'app-footer-first-column',
  templateUrl: './footer-first-column.component.html',
  styleUrls: ['./footer-first-column.component.scss']
})
export class FooterFirstColumnComponent implements OnInit {

  @Input() leftColumn: LeftColumn;
  @Input() socialLinks: SocialLinks;

  constructor() { }

  ngOnInit() {
  }

}
