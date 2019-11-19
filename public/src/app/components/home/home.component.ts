import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allProducts: any;
  constructor(private _httpService: HttpService, private route: Router) { }

  ngOnInit() {
    this.getAllProd();
  }

  getAllProd(){
    let obs = this._httpService.getProd();
    obs.subscribe(data =>{
      let thing: any = data
      this.allProducts = thing.result;
    })
  }
  goToUpdate(id){
    this.route.navigate([`products/${id}/edit`])
  }

}
