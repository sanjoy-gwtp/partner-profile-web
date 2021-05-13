import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointState, Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { environment } from 'src/environments/environment';
import { TokenService, TokenStoreService } from 'core-component';
import { Router } from '@angular/router';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  title: String = 'Partner';
  userName:string;
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  constructor(
    private breakpointObserver: BreakpointObserver,
    private tokenService: TokenService,
    private tokenStore:TokenStoreService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.userName=this.tokenStore.token.firstName
  }

  logout() {
    this.tokenService.logout()
      .subscribe(data => {
        console.log('logout:' + data);
        this.router.navigate(['login']);
      });
  }

}
