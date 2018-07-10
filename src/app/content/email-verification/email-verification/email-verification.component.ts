import { EmailVerificationService } from './../email-verification.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css']
})
export class EmailVerificationComponent implements OnInit {

  public error = false;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _emailVerificationService: EmailVerificationService
  ) { }

  public ngOnInit() {
    const hash: string = this._activatedRoute.snapshot.params.hash;
    this._emailVerificationService.checkEmail(hash).subscribe(
      () => {},
      () => this.error = true
    );
  }

}
