import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../shared/shared.module";
import { RegionsRoutingModule } from "./regions-routing.module";

import { RegionsListComponent } from "./components/regions-list/regions-list.component";
import { CountriesListComponent } from "./components/countries-list/countries-list.component";
import { CountryDetailsComponent } from "./components/country-details/country-details.component";
import { RegionsWrapperComponent } from "./components/regions-wrapper/regions-wrapper.component";

@NgModule({
  declarations: [
    RegionsListComponent,
    CountriesListComponent,
    CountryDetailsComponent,
    RegionsWrapperComponent,
  ],
  imports: [CommonModule, SharedModule, RegionsRoutingModule],
})
export class RegionsModule {}
