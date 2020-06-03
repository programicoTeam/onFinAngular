import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ClinetInputComponent } from './filters/clinet-input/clinet-input.component';
import { BreakdownComponent } from './filters/breakdown/breakdown.component';
import { BudgetComponent } from './filters/budget/budget.component';
import { BpvpComponent } from './filters/bpvp/bpvp.component';
import { CfComponent } from './filters/cf/cf.component';
import { CsComponent } from './filters/cs/cs.component';
import { GrComponent } from './filters/gr/gr.component';
import { IsifComponent } from './filters/isif/isif.component';
import { ProgressComponent } from './filters/progress/progress.component';
import { RatioComponent } from './filters/ratio/ratio.component';
import { ClientInputBodyComponent } from './body/client-input-body/client-input-body.component';
import { RegisterComponent } from './body/register/register.component';
import { BudgetBodyComponent } from './body/budget-body/budget-body.component';
import { BpvpBodyComponent } from './body/bpvp-body/bpvp-body.component';
import { BreakdownBodyComponent } from './body/breakdown-body/breakdown-body.component';
import { CfBodyComponent } from './body/cf-body/cf-body.component';
import { CsBodyComponent } from './body/cs-body/cs-body.component';
import { DashboardComponent } from './body/dashboard/dashboard.component';
import { EltdComponent } from './body/eltd/eltd.component';
import { GrBodyComponent } from './body/gr-body/gr-body.component';
import { GraphsComponent } from './body/graphs/graphs.component';
import { IsifBodyComponent } from './body/isif-body/isif-body.component';
import { NltdComponent } from './body/nltd/nltd.component';
import { PricingComponent } from './body/pricing/pricing.component';
import { ProgressBodyComponent } from './body/progress-body/progress-body.component';
import { RatioBodyComponent } from './body/ratio-body/ratio-body.component';
import { ValuationComponent } from './body/valuation/valuation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ClinetInputComponent,
    BreakdownComponent,
    BudgetComponent,
    BpvpComponent,
    CfComponent,
    CsComponent,
    GrComponent,
    IsifComponent,
    ProgressComponent,
    RatioComponent,
    ClientInputBodyComponent,
    RegisterComponent,
    BudgetBodyComponent,
    BpvpBodyComponent,
    BreakdownBodyComponent,
    CfBodyComponent,
    CsBodyComponent,
    DashboardComponent,
    EltdComponent,
    GrBodyComponent,
    GraphsComponent,
    IsifBodyComponent,
    NltdComponent,
    PricingComponent,
    ProgressBodyComponent,
    RatioBodyComponent,
    ValuationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
