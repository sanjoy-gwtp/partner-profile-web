import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RestEndPoint } from '../../services/rest.end.point';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  route(path: String) {
    if (path == 'password') {
      let logOut = RestEndPoint.OAUTH_SERVER_END_POINT + "/password?redirect_uri=" + window.location.href;
      window.location.href = logOut;
    } else {
      this.router.navigate([path]);
    }
  }
}
