import { Component, OnInit } from '@angular/core';
import { Search } from '../services/user.service';

@Component({
  selector: 'app-search-lat-long',
  templateUrl: './search-lat-long.component.html',
  styleUrls: ['./search-lat-long.component.css'],
})
export class SearchLatLongComponent implements OnInit {
  heroes = [
    { la: '6.24', long: '101.5', name: 'ศรีสาคร 2' },
    { la: '13.71', long: '100.6', name: 'ปรีดีพนมยงค์ 2 (ท้ายซอย)' },
    { la: '13.73', long: '100.7', name: 'เลียบมอเตอร์เวย์ บ้านกลางเมือง' },
    { la: '13.96', long: '100.39', name: 'เลียบคลองลำรี บางบัวทอง' },
    { la: '13.68', long: '100.65', name: 'ศรีนครินทร์ 58 (แยกศรีอุดม)' },
  ];

  constructor(private Search: Search) {}

  date = new Date();

  storelat: any;
  storelong: any;
  storeid = '';
  storename = '';

  n_weatherDesc = '';
  n_tempC = '';
  n_windspeedKmph = '';
  n_humidity = '';
  n_url = '';

  d_weatherDesc = '';
  d_tempC = '';
  d_windspeedKmph = '';
  d_humidity = '';
  d_url = '';

  ngOnInit(): void {}

  searchlatlong(lat: number, long: number) {
    if(lat==undefined&&long==undefined){
      return alert("ไม่พบข้อมูล กรุณาใส่ข้อมูล");
    }
    this.Search.getstorelatlong(lat, long).subscribe((res) => {
      if(res.status.includes('not found'))return alert('not ok');
      console.log(res.result);
      this.storeid = res.result[0].store_id;
      this.storename = res.result[0].store_name;
      this.storelat = res.result[0].store_latitude;
      this.storelong = res.result[0].store_longitude;

      this.n_weatherDesc = res.result[0].weatherDesc;
      this.n_tempC = res.result[0].tempC;
      this.n_windspeedKmph = res.result[0].windspeedKmph;
      this.n_humidity = res.result[0].humidity;
      this.n_url = res.result[0].weatherIconUrl;

      this.d_weatherDesc = res.result[0].day_weatherDesc;
      this.d_tempC = res.result[0].day_tempC;
      this.d_windspeedKmph = res.result[0].day_windspeedKmph;
      this.d_humidity = res.result[0].day_humidity;
      this.d_url = res.result[0].day_weatherIconUrl;

      this.date = res.result[0].date;
      
    },
    err=>{
      alert('ไม่พบข้อมูล กรุณาใส่ข้อมูล');
    });
  }
}
