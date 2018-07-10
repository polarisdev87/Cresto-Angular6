import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verification-notice',
  templateUrl: './verification-notice.component.html',
  styleUrls: ['./verification-notice.component.css']
})
export class VerificationNoticeComponent implements OnInit {

  public username!: string;

  public constructor(
    private _authService: AuthService,
    private _router: ActivatedRoute,
  ) { }

  public ngOnInit() {
    this._router.queryParams.subscribe((data: { username: string }) => this.username = data['username']);
  }

  public resendVerificationEmail() {
    this._authService.recendVerificationEmail(this.username)
    .subscribe(() => alert(`Email successfully sent to: ${this.username}`));
  }

}
