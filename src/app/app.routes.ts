import { NgModule } from "@angular/core";

import {
  Routes,
  RouterModule,
  NoPreloading,
  PreloadAllModules
} from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "result",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: "./home/home.module#HomeModule"
  },
  {
    path: "auth",
    loadChildren: "./auth/auth.module#AuthModule"
  },
  {
    path: "datashow",
    loadChildren: "./analytics/analytics.module#AnalyticsModule"
  },
  {
    path: "result",
    loadChildren: "./reports/reports.module#ReportsModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
