import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  isLoggedIn = false;
  showSurveyList = false;
  username? : string;

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();

    if(this.isLoggedIn) {
      const user:any = this.tokenStorage.getUserKey();
      this.showSurveyList = true;
      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorage.signOut();
    window.location.reload();
  }

}

