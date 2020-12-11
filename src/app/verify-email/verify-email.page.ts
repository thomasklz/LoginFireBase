import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Observable } from 'rxjs';
import { User } from '../shared/user.interface';
@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage implements OnInit {  
  user$: Observable<User> = this.authSvc.afAuth.user;
  constructor(private authSvc: AuthService) {}

  async onSendEmail(): Promise<void> {
    try {
      await this.authSvc.sendVerifcationEmail();
    } catch (error) {
      console.log('Error->', error);
    }
  }
  ngOnInit(){

  }
  ngOnDestroy(): void {
    this.authSvc.logout();
  }
}
