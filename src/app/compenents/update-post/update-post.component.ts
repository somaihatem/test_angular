import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit{

  postForm?:FormGroup;
  submitted=false;
  id:any;
  constructor(private postservice:PostService,private router:Router ,private activatedRoute:ActivatedRoute){}
  
  ngOnInit(): void {
    this.postForm = new FormGroup({
      titre : new FormControl('',[Validators.required]),
      description : new FormControl('',[Validators.required]),
      categorie: new FormControl(''),
  
  
    });
    this.updatepostsById();
}

updatepostsById(){
  this.submitted= true;
  if(this.postForm?.invalid){
    return;
  
  }
  this.postservice.updatepost(this.id, this.postForm?.value).subscribe((Response:any)=>{
  //console.log(Response);
this.router.navigateByUrl('/list');
},(error:any)=>{
  console.log(error);
})


}

}
