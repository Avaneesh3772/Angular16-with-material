import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppCommonService } from 'src/app/shared/services/app-common.service';
import { RestatementConstants } from '../restatement.constants';
import { CommentsList } from '../restatement.models';
import { RestatementService } from '../restatement.service';

@Component({
  selector: 'app-track-and-action',
  templateUrl: './track-and-action.component.html',
  styleUrls: ['./track-and-action.component.scss']
})
export class TrackAndActionComponent implements OnInit {

  public dataSource: CommentsList[] = [];
  public displayedColumns: string[] = RestatementConstants.displayedColumns;
  public errorMessage: string = '';
  public userDataLoaded = false;

  constructor(private restatementService : RestatementService,
    private appCommonService: AppCommonService,
    private router : Router)
  {
    this.showCommentsTable();
  }

  ngOnInit(): void {
  }

  showCommentsTable() {
    this.restatementService.getCommentsList(RestatementConstants.commentsApiURL).subscribe((response: CommentsList[]) =>{
      let sortCommentsArray = response.filter(item => item.id < 21);
      this.dataSource = sortCommentsArray;      
      this.userDataLoaded = true;
    }, (error: HttpErrorResponse) =>{
      this.errorMessage = error.message;
    })
  }

  navigateToTrack(element: CommentsList) {
    this.router.navigate(['restatement/track', element.id ]);
  }
}
