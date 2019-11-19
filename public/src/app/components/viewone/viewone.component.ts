import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewone',
  templateUrl: './viewone.component.html',
  styleUrls: ['./viewone.component.css']
})
export class ViewoneComponent implements OnInit {

  Prod: any;
  currentId: any;
  canDelete: boolean;
  constructor(private _httpService: HttpService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.currentId = this.route.snapshot.paramMap.get('id');
    this.getProd(this.currentId);
  }

  getProd(id){
    let obs = this._httpService.getOne(id);
    obs.subscribe(data =>{
      let thing: any = data;
      this.Prod = thing.result;
      if(this.Prod.qty == 0){
        this.canDelete = true;
      } else {
        this.canDelete = false;
      }
    })
  }
  deleteProd(id){
    if(this.Prod.qty == 0){

      let obs = this._httpService.deleteRest(id);
      obs.subscribe(data =>{
        console.log("deleted");
        this.router.navigate(['/products']);
      })
    }
  }

}
