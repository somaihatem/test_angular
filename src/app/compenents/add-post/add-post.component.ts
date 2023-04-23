import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit{

  postForm?:FormGroup;
  submitted=false;
  constructor(private postservice:PostService,private router:Router ){}

  ngOnInit(): void {
  this.postForm = new FormGroup({
    titre : new FormControl('',[Validators.required]),
    description : new FormControl('',[Validators.required]),
    categorie: new FormControl(''),


  });
  
}
add(){
  this.submitted= true;
  if(this.postForm?.invalid){
    return;
  }
 // console.log(this.postForm?.value)
this.postservice.createpost(this.postForm?.value).subscribe((Response:any)=>{
alert('post added successfully')
this.router.navigateByUrl('/list');
},(error:any)=>{
  console.log(error);
});
}}
