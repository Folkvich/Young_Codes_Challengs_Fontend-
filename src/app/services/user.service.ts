import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { store } from '../interface/store.interface';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Search {
  constructor(private http: HttpClient) {}
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  backend_api = 'http://localhost:3300';

  getStore() {
    return this.http.get(this.backend_api + '/getstore');
  }

  getbook(id: number): Observable<any> {
    let API_URL = `${this.backend_api}/getstore`;
    let param = new HttpParams().set("id",id);
    return this.http.get(API_URL, { params: param }).pipe(
      map((res: any) => {
        return res || {};
      })
    );
  }

  // getStoreId() {
  //     try {
  //         const data_raw = sessionStorage.getItem('store')
  //         if (!data_raw) return null;
  //         const data = JSON.parse(data_raw ?? "") as store;
  //         this.store = data;
  //         return data
  //     }
  //     catch {
  //         return null;
  //     }
  // }

  // login(user: string, pass: string) {
  //     const url = this.backend_api + "/login"
  //     const body = {
  //         "username": user,
  //         "password": pass
  //     }
  //     const header = {
  //         "content-type": "application/json"
  //     }
  //     return this.http.post<ApiResponse<UserData>>(url, body, { headers: header })
  // }

  // logout() {
  //     sessionStorage.clear();
  //     this.userData = undefined
  // }

  // saveUserData(data: UserData) {
  //     this.userData = data;
  //     sessionStorage.setItem('userdata', JSON.stringify(data))
  // }
}
