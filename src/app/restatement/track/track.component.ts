import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestatementConstants } from '../restatement.constants';
import { CommentsList } from '../restatement.models';
import { RestatementService } from '../restatement.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

  public getCommentID!: number;
  public getSelectedComment!: CommentsList;
  public errorMessage: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private restatementService : RestatementService
    ){
      this.activatedRoute.params.subscribe((paramsInfo) => {
        console.log('paramsInfo=>', paramsInfo);
        this.getCommentID = paramsInfo['id'];
      })
    }

  ngOnInit(): void {
    this.restatementService.getCommentsList(RestatementConstants.commentsApiURL).subscribe((response: CommentsList[]) =>{
      const filteredData = response.filter(item =>{
        return item.id === +(this.getCommentID);
    });
    this.getSelectedComment = filteredData[0];
    }, (error: HttpErrorResponse) =>{
      this.errorMessage = error.message;
    })     
  }

}
