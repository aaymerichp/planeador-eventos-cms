import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HOST} from './constants';

@Injectable({
  providedIn: 'root'
})
export class APICallerService {

  constructor(private http: HttpClient) { }
  entityEndpoint = ''

  setEntityEndpoint(entityStr) {
    this.entityEndpoint = entityStr;
  }
  getAll(): Observable<any> {
    return this.http.get(`${HOST}/${this.entityEndpoint}s`);
  }

  // getAllAssignedAssets(id): Observable<any> {
  //   return this.http.get(`${employeeToAssetGetUrl}/${id}`);
  // }

  get(uuid): Observable<any> {
    return this.http.get(`${HOST}/${this.entityEndpoint}/${uuid}`);
  }

  create(data): Observable<any> {
    return this.http.post(`${HOST}/${this.entityEndpoint}/create/`, data);
  }

  update(uuid, data): Observable<any> {
    delete data.uuid;
    return this.http.put(`${HOST}/${this.entityEndpoint}/update/${uuid}`, data);
  }

  delete(uuid): Observable<any> {
    return this.http.delete(`${HOST}/${this.entityEndpoint}/delete/${uuid}`);
  }
}
