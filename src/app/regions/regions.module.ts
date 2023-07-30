import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RegionsRoutingModule } from "./regions-routing.module";

import { RegionsListComponent } from "./components/regions-list/regions-list.component";
import { CountriesListComponent } from "./components/countries-list/countries-list.component";
import { CountryDetailsComponent } from "./components/country-details/country-details.component";

@NgModule({
  declarations: [
    RegionsListComponent,
    CountriesListComponent,
    CountryDetailsComponent,
  ],
  imports: [CommonModule, RegionsRoutingModule],
})
export class RegionsModule {}
