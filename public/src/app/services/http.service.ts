import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getProd(){
    return this._http.get("/api/products");
  }
  getOne(id){
    return this._http.get(`/api/products/${id}`);
  }
  createRest(product){
    return this._http.post("/api/products/create", product);
  }
  editRest(id, product){
    return this._http.put(`/api/products/${id}/editproduct`, product);
  }
  deleteRest(id){
    return this._http.delete(`/api/products/${id}/deleteproduct`);
  }
}
