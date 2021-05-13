import { Routes } from "@angular/router";
import { AuthGuard } from 'core-component';
import { LoginComponent } from 'core-component';
import { DashboardComponent } from "./app-module/dashboard/dashboard.component";
import { NotFoundComponent } from "./app-module/not-found/not-found.component";
import { MainNavComponent } from './app-module/main-nav/main-nav.component';
import { ChangePasswordComponent } from "./app-module/change-password/change-password.component";
import { DepositComponent } from "./app-module/deposit/deposit.component";
import { WithdrawComponent } from "./app-module/withdraw/withdraw.component";
import { VoteComponent } from "./app-module/vote/vote.component";
import { CommissionComponent } from "./app-module/commission/commission.component";
import { AddWithdrawComponent } from "./app-module/withdraw/add/add.component";
import { AddDepositComponent } from "./app-module/deposit/add/add.component";
import { ProfileComponent } from "./app-module/profile/profile.component";
import { NoticeComponent } from "./app-module/notice/notice.component";
import { ContentVideoComponent } from "./app-module/content-video/content-video.component";
import { TrainingVideoComponent } from "./app-module/training-video/training-video.component";

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', canActivate: [AuthGuard], component: MainNavComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'deposits', component: DepositComponent },
      { path: 'deposit', component: AddDepositComponent },
      { path: 'withdraws', component: WithdrawComponent },
      { path: 'withdraw', component: AddWithdrawComponent },
      { path: 'vote', component: VoteComponent },
      { path: 'commission', component: CommissionComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'notice', component: NoticeComponent },
      { path: 'change-password', component: ChangePasswordComponent },
      { path: 'content-videos', component: ContentVideoComponent },
      { path: 'training-videos', component: TrainingVideoComponent },
      { path: '**', component: NotFoundComponent },]
  }
];

