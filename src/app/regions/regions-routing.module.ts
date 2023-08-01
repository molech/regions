import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RegionsWrapperComponent } from "./components/regions-wrapper/regions-wrapper.component";
import { RegionsListComponent } from "./components/regions-list/regions-list.component";
import { CountriesListComponent } from "./components/countries-list/countries-list.component";
import { CountryDetailsComponent } from "./components/country-details/country-details.component";

const routes: Routes = [
  {
    path: "",
    component: RegionsWrapperComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "regions",
      },
      {
        path: "regions",
        component: RegionsListComponent,
      },
      {
        path: "regions/:region",
        component: CountriesListComponent,
      },
      {
        path: "regions/:region/:country",
        component: CountryDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegionsRoutingModule {}
