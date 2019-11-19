import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  Prod: any;
  constructor(private _httpService: HttpService, private route: Router) { }

  ngOnInit() {
    this.Prod = { 
      name: "",
      qty: 0,
      price: 0
    }
  }

  createProd(){
    let obs = this._httpService.createRest(this.Prod);
    obs.subscribe(data =>{
      if(data['message'] == "success"){
        this.route.navigate(['/products'])

      }
    })

  }
  resetProd(){
    this.Prod = { 
      name: "",
      qty: 0,
      price: 0
    }
  }

}
