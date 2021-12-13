import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { StocksComponent } from "./components/page-components/stocks/stocks";
import { SettingsComponent } from "./components/page-components/settings/settings";
import { NotFoundComponent } from "./components/page-components/not-found/not-found";
import { BrokersComponent } from "./components/page-components/brokers/brokers";
import { BrokersTable } from "./components/page-element-components/brokers-table/brokers-table";
import { StocksTable } from "./components/page-element-components/stocks-table/stocks-table";
import { SettingsForm } from "./components/page-element-components/setings-form/settings-form";

const appRoutes: Routes = [
  { path: '', component: StocksComponent },
  { path: 'stocks', component: StocksComponent },
  { path: 'brokers', component: BrokersComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent, StocksComponent, SettingsComponent, NotFoundComponent, BrokersComponent, BrokersTable, StocksTable, SettingsForm
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
