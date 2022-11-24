import { Component, OnInit } from '@angular/core';
import { Search } from "src/app/services/user.service";

@Component({
  selector: 'app-search-id',
  templateUrl: './search-id.component.html',
  styleUrls: ['./search-id.component.css']
})
export class SearchIdComponent implements OnInit {

  storeid :any
  storename = "";
  storela = "";
  storelong = "";

  constructor(
    private Search : Search
    ) { }

  ngOnInit(): void {
  //   this.Search.getbook(18002).subscribe((res)=>{console.log(res.result[0]);
  // })
}

search(id:number){
  this.Search.getbook(id).subscribe(
    (res)=>{console.log(res.result[0].store_id);
      //  this.storeid = res.result[0].store_id
       this.storename = res.result[0].store_name
       this.storela = res.result[0].store_latitude
       this.storelong = res.result[0].store_longitude
  });
}


}
