import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Device } from '../models/etc/device.model';
import { SetDevice } from '../actions/lang.actions';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private store: Store) {
  }

  setDevice(device: Device) {
    this.store.dispatch(new SetDevice(device));
  }
}
