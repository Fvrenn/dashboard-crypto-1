import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { LucideAngularModule, File, Home, Menu, UserCheck } from 'lucide-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { CardWalletsComponent } from './components/modules/card-wallets/card-wallets.component';
import { CardStatsSummaryComponent } from './components/modules/card-stats-summary/card-stats-summary.component';
import { LastTransactionSummaryComponent } from './components/modules/last-transaction-summary/last-transaction-summary.component';
import { ContentComponent } from './components/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardWalletsComponent,
    CardStatsSummaryComponent,
    LastTransactionSummaryComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({File, Home, Menu, UserCheck})
  ],

  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
