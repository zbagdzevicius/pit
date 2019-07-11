import { Component, Inject, HostListener } from '@angular/core';
import { LangState } from './core/state/lang.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ContentService } from './core/services/content.service';
import { DOCUMENT } from '@angular/common';
import { DeviceService } from './core/services/device.service';
import { Device } from './core/models/etc/device.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pit';

  @Select(LangState.getLanguage) language$: Observable<string>;
  @Select(LangState.getContactButton) contactHero$: Observable<string>;
  @Select(LangState.getDevice) device$: Observable<Device>;
  lastHero: string;
  isMobile: boolean;

  constructor(
    private contentService: ContentService,
    private deviceService: DeviceService
  ) {
    this.resize(window.innerWidth);
    this.language$
      .subscribe(language => {
        if (language) {
          this.contentService.getContent(language);
        }
      });
    this.contactHero$
      .subscribe(lastHero => this.lastHero = lastHero);
    this.device$
      .subscribe(device => {
        if (device) {
          this.isMobile = device.isMobile;
        }
      }
      );
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const width = event.target.innerWidth;
    this.resize(width);
  }

  resize(width) {
    if (width > 812) {
      this.deviceService.setDevice({ isMobile: false });
    } else {
      this.deviceService.setDevice({ isMobile: true });
    }
  }
}
