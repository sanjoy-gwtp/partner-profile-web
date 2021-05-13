import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreComponentModule, ToasterService, TokenInterceptor, TokenStoreService } from 'core-component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EnvironmentService } from './services/environment.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { HomeComponent } from './app-module/home/home.component';
import { MainNavComponent } from './app-module/main-nav/main-nav.component';
import { MainMenuComponent } from './app-module/main-menu/main-menu.component';
import { NotFoundComponent } from './app-module/not-found/not-found.component';
import { DashboardComponent } from './app-module/dashboard/dashboard.component';
import { ChangePasswordComponent } from './app-module/change-password/change-password.component';;
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { CurrencyPipe } from '../app/utility/currencyPipe';
import { DepositComponent } from './app-module/deposit/deposit.component';
import { VoteComponent } from './app-module/vote/vote.component';
import { CommissionComponent } from './app-module/commission/commission.component';
import { WithdrawComponent } from './app-module/withdraw/withdraw.component';
import { AddWithdrawComponent } from './app-module/withdraw/add/add.component';
import { AddDepositComponent } from './app-module/deposit/add/add.component';
import { ProfileComponent } from './app-module/profile/profile.component';
import { MatNativeDateModule } from '@angular/material/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NoticeComponent } from './app-module/notice/notice.component';
import { ProfileImageDialogComponent } from './app-module/profile/profile-image-dialog/profile-image-dialog.component';
import { TrainingVideoComponent } from './app-module/training-video/training-video.component';
import { ContentVideoComponent } from './app-module/content-video/content-video.component';
import { TrainingVideoPlayerComponent } from './app-module/training-video/training-video-player/training-video-player.component';


@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    MainNavComponent,
    MainMenuComponent,
    NotFoundComponent,
    DashboardComponent,
    ChangePasswordComponent,
    CurrencyPipe,
    DepositComponent,
    VoteComponent,
    CommissionComponent,
    WithdrawComponent,
    AddWithdrawComponent,
    AddDepositComponent,
    ProfileComponent,
    NoticeComponent,
    ProfileImageDialogComponent,
    TrainingVideoComponent,
    ContentVideoComponent,
    TrainingVideoPlayerComponent,
  ],
  imports: [
    CoreComponentModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    RouterModule.forRoot(appRoutes),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTabsModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatTableModule,
    MatSelectModule,
    MatTooltipModule,
    MatPasswordStrengthModule,
    NgxMatFileInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    PdfViewerModule,
    YouTubePlayerModule
  ],
  exports: [
    CurrencyPipe,
    // BankdilogComponent,
    // BanksearchdilogComponent,
    // BranchdilogComponent,
    // BranchsearchdilogComponent,
    // ModuledilogComponent
  ],
  providers: [ToasterService, TokenStoreService, Location,
    //{provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: 'environmentInterface', useClass: EnvironmentService },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  // providers: [{ provide: 'environmentInterface', useClass: EnvironmentService }],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
