import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CreatePostModel } from '../template.models';

@Component({
  selector: 'app-dialog-create-resource',
  templateUrl: './dialog-create-resource.component.html',
  styleUrls: ['./dialog-create-resource.component.scss']
})
export class DialogCreateResourceComponent implements OnInit {

  public titlePost: string = '';
  public bodyPost: string = '';
  public userIdPost!: number;
  public createPost=  new CreatePostModel(this.titlePost, this.bodyPost, this.userIdPost);
  /* public createPost = {
    title: this.titlePost,
    body: this.bodyPost,
    userId:  this.userIdPost
  } */

  constructor(public dialogRef: MatDialogRef<DialogCreateResourceComponent>) { }

  ngOnInit(): void {
  }

  formSubmit(userForm: NgForm) {
      console.log('userForm', userForm.value)
      this.dialogRef.close(this.createPost);
  }

}
