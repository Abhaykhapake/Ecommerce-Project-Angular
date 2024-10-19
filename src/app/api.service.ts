import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService 
{
  endpoint ="https://a2zithub.org/dairy/abi/";
  constructor( private http:HttpClient) { }
  getCatList()
  {
    return this.http.get(this.endpoint+'product_cat_details');
  }
  register(data:any)
  {
    return this.http.post(this.endpoint+'user_register',data);
  }
  login(data:any)
  {
    return this.http.post(this.endpoint+'user_login',data);
  }
  slider_det()
  {
    return this.http.get(this.endpoint+'slider_det');
  }
  product_det()
  {
    return this.http.get(this.endpoint+'product_det');
  }
  products_by_cat(cat_id:any)
  { 
    var obj = {"cat_id":cat_id};
    return this.http.post(this.endpoint+'products_by_cat',obj);
  }
  product_by_id(id:any)
  { 
    var obj = {"product_id":id,'token':localStorage.getItem('token')};
    return this.http.post(this.endpoint+'product_by_id',obj);
  }
  addtocart(id:any)
  { 
    var obj = {"product_id":id,'token':localStorage.getItem('token')};
    return this.http.post(this.endpoint+'addtocart',obj);
  }

}
