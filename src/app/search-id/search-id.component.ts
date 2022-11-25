import { Component, OnInit } from '@angular/core';
import { Search } from 'src/app/services/user.service';

@Component({
  selector: 'app-search-id',
  templateUrl: './search-id.component.html',
  styleUrls: ['./search-id.component.css'],
})
export class SearchIdComponent implements OnInit {

  heroes = [
    { id: 18002, name: 'ศรีสาคร 2' },
    { id: 18003, name: 'ปรีดีพนมยงค์ 2 (ท้ายซอย)' },
    { id: 18006, name: 'เลียบมอเตอร์เวย์ บ้านกลางเมือง' },
    { id: 18007, name: 'เลียบคลองลำรี บางบัวทอง' },
    { id: 18008, name: 'ศรีนครินทร์ 58 (แยกศรีอุดม)' },
  ];

  storeid: any;
  storename = '';
  storelat = '';
  storelong = '';

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

  constructor(private Search: Search) {}

  ngOnInit(): void {
    //   this.Search.getbook(18002).subscribe((res)=>{console.log(res.result[0]);
    // })
  }

  search(id: number) {
    this.Search.getstoreid(id).subscribe((res) => {
      console.log(res.result[0].store_id);
      //  this.storeid = res.result[0].store_id
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
    });
  }
}
