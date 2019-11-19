import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  Prod: any;
  currentId: any;
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
    })
  }

  updateProd(){
    let obs = this._httpService.editRest(this.currentId, this.Prod);
    obs.subscribe(data => {
      if(data['message'] == "success"){
      this.router.navigate(['/products'])
      }
    })
  }
  resetProd(){
    this.getProd(this.currentId);
  }

}
