import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }
  createpost(data:any){
   return this.http.post('http://localhost:3000/posts',data); 
  }


  getAllPost(){
    return this.http.get('http://localhost:3000/posts');

  }

  deletpostById(id:any){
    return this.http.delete('http://localhost:3000/posts/' +id);
    
  }

  
  updatepost(id:any, data:any){
    return this.http.put('http://localhost:3000/posts/+id',data);

  }

}
