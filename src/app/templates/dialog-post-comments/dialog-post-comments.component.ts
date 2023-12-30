import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TemplateConstants } from '../template.constants';
import { CommentList, PostList } from '../template.models';
import { TemplatesService } from '../templates.service';

@Component({
  selector: 'app-dialog-post-comments',
  templateUrl: './dialog-post-comments.component.html',
  styleUrls: ['./dialog-post-comments.component.scss']
})
export class DialogPostCommentsComponent implements OnInit {

  public displayedColumns: string[] = TemplateConstants.displayedColumnsComments;
  public rowData: PostList;
  public dataSource: CommentList[] = [];
  public userDataLoaded: boolean = false;
  public errorMessage: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialogRef: MatDialogRef<DialogPostCommentsComponent>,
    private templatesService: TemplatesService,
  )
  {
    this.rowData = data.rowData;
    this.getCommentsData();
  }

  ngOnInit(): void {
  }

  getCommentsData() {
    const id = this.rowData.id;
    this.templatesService.getAllCommentsData(TemplateConstants.commentsApiURL(id)).subscribe((response:CommentList[]) => {
      console.log('GET Comments Template Response', response);
      this.dataSource = response;
      this.userDataLoaded = true;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.message;
      console.log('this.errorMessage', this.errorMessage);
    })
  }

  closeDialog() {
    this.dialogRef.close(true);
  }

}
