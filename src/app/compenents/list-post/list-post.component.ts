import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit{
  posts:any;
  constructor(private postservice:PostService){

  }
  ngOnInit():void{
    this.getAllPosts();

  }

  getAllPosts(){
    this.postservice.getAllPost().subscribe((Response:any)=>{
    this.posts=Response;
    },(error)=>{
      console.log(error)
    });


  }
  deletpostt(id:any){
  this.postservice.deletpostById(id).subscribe((Response:any)=>{
  this.getAllPosts();
    },(error)=>{
      console.log(error)
    });
}
}