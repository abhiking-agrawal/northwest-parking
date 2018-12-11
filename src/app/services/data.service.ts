import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import config from '../config/config';
import { UserData } from 'src/app/model/userData'
import { ParkingSlotData } from 'src/app/model/parkingSlotData'
import { PaymentHistoryData } from '../user/payment-history/payment-history.component';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient: HttpClient) { }

  getAllUsers() {
    return this.httpclient.get<UserData[]>(config.url + '/user/all')
  }

  addUser(data) {
    return this.httpclient.post(config.url + '/user/create',data)
  }

  updateUser(id,data) {
    return this.httpclient.post(config.url + '/user/edit/'+ id,data)
  }

  deleteUser(id) {
    return this.httpclient.get(config.url + '/user/delete/'+ id)
  }

  getAllParkingSlots() {
    return this.httpclient.get<ParkingSlotData[]>(config.url + '/parkingSlot/all')
  }

  getAllParkingSlotsForUser() {
    return this.httpclient.get<ParkingSlotData[]>(config.url + '/parkingSlot/user')
  }

  addParkingSlot(data) {
    return this.httpclient.post(config.url + '/parkingSlot/create',data)
  }

  updateParkingSlot(id,data) {
    return this.httpclient.post(config.url + '/parkingSlot/edit/'+ id,data)
  }

  deleteParkingSlot(id) {
    return this.httpclient.get(config.url + '/parkingSlot/delete/'+ id)
  }

  getAllPayments() {
    return this.httpclient.get<PaymentHistoryData[]>(config.url + '/user/paymenthistory')
  }
}
