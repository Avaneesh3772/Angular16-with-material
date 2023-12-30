import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreateResourceComponent } from './dialog-create-resource/dialog-create-resource.component';
import { DialogPostCommentsComponent } from './dialog-post-comments/dialog-post-comments.component';
import { TemplateConstants } from './template.constants';
import { PostList } from './template.models';
import { TemplatesService } from './templates.service';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {

  public displayedColumns: string[] = TemplateConstants.displayedColumns;
  public dataSource: PostList[] = [];
  public userDataLoaded: boolean = false;
  public errorMessage: string = '';

  constructor(
    private dialog: MatDialog,
    private templatesService: TemplatesService,
  ) {
       this.getTemplateData()
    }

  ngOnInit(): void {  }

  getTemplateData() {
      this.templatesService.getAllTemplateData(TemplateConstants.getTemplateURL).subscribe((response:PostList[]) => {
        console.log('GET Template Response', response);
        this.dataSource = response;
        this.userDataLoaded = true;
      }, (error: HttpErrorResponse) => {
        this.errorMessage = error.message;
        console.log('this.errorMessage', this.errorMessage);
      })
  }

  openCreateNewResourceDialog() {
    const dialogRef = this.dialog.open(DialogCreateResourceComponent, {
      height: '400px',
      width: '600px',
    })

    dialogRef.afterClosed().subscribe((result: Object) => {
      console.log('postBody', result);
      if(result && Object.keys(result).length === 3) {
            this.createNewResource(result);
      }

      /* if(result && result.hasOwnProperty('body') && result.hasOwnProperty('title') && result.hasOwnProperty('userId')) {
        this.createNewResource(result);
      } */
    });
  }

  createNewResource(postBody: any) {
    const httpPrams = new HttpParams().set('name', 'Avaneesh').set('city', 'Toronto');
    this.templatesService.postNewTemplateData(TemplateConstants.postTemplateURL, postBody, httpPrams).subscribe((response:PostList) => {
      console.log('postBody Response', response);
      this.getTemplateData();
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.message;
      console.log('this.errorMessage', this.errorMessage);
    })
  }

  updateResource(element: PostList) {
    const id = element.id;
    const userId = element.userId;
    const updateBody = {
      id: id,
      title: 'Avaneesh Mishra',
      body: 'Update Data by PUT Method Testing',
      userId: userId,
    }
    this.templatesService.updateNewTemplateData(TemplateConstants.updateTemplateURL(id), updateBody).subscribe((response:PostList) => {
      console.log('updateBody Response', response);
      this.getTemplateData();
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.message;
      console.log('this.errorMessage', this.errorMessage);
    })
  }

  deleteResource(element: PostList) {
    const id = element.id;
    this.templatesService.deleteTemplateData(TemplateConstants.deleteTemplateURL(id)).subscribe((response:PostList) => {
      console.log('updateBody Response', response);
      this.getTemplateData();
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.message;
      console.log('this.errorMessage', this.errorMessage);
    })
  }


  openCommentsDialog(rowData: PostList) {
    const dialogRef = this.dialog.open(DialogPostCommentsComponent, {
      height: '500px',
      width: '800px',
      data: { rowData: rowData}
    })

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(result);
    });
  }

}
