import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id: number;
  private headers = new Headers({'content-type' :  "application/json"});
  constructor(private http : Http) { }

  products = [];
  fetchData = function () {
    this.http.get("http://localhost:5555/products").subscribe
    (
      (res: Response) => {
        this.products = res.json();
      }
    )
  }
  deleteProduct = function(id) {
    if(confirm("are you sure")) {
      const url = `${"http://localhost:5555/products"}/${id}`;
    return this.http.delete(url, {headers : this.headers}).toPromise()
    .then(() => {
      this.fetchData();
    })
    }
  }
  ngOnInit() {
    this.fetchData();
  }

}
