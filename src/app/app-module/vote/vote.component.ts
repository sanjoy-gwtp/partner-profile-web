import { Component, OnInit } from '@angular/core';
import { ApiService, ToasterService, TokenStoreService } from 'core-component';
import { Selection, Vote } from 'src/app/models/Partner';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  votes: Vote[];
  // selection: Selection = { id: null, userId: null, selection: null, vote: null }
  checked = false;
  indeterminate = false;
  labelPosition: string;
  disabled = false;

  constructor(private apiService: ApiService,
    private tokenStore: TokenStoreService,
    private toasterService: ToasterService) { }

  ngOnInit(): void {
    this.loadAllvote();
  }

  loadAllvote(): void {
    this.apiService.getPartnerCall("vote", { params: [] }).subscribe((response: any) => {
      // console.log('response', response);
      if (response) {
        response.forEach(vote => {
          this.getSelection(vote);
        });
        this.votes = response;
      }
    });
  }

  getSelection(vote: Vote) {
    this.apiService.getPartnerCall(`selection/voteId/${vote.id}`, { params: [] }).subscribe((response: any) => {
      // console.log('response', response);
      if (response) {
        vote.isActive = response.selection;
      }
      // this.selection = response;
    });
  }

  saveSelection(vote: Vote): void {
    const selection = new Selection();
    selection.selection = vote.isActive;
    selection.userId = this.tokenStore.token.user_name;
    selection.vote = vote;
    this.apiService.postPartnerCall("selection", selection).subscribe((response: any) => {
      // console.log('response', response);
      // this.selection = response;
      this.toasterService.openSnackBar('Voted successfully');
    });
  }

}
