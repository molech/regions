import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { ApiService } from "./api/api.service";

import { Region, Country } from "../types/regions-model";
import { ApiRegion, ApiCountry } from "../types/regions-api";

@Injectable({
  providedIn: "root",
})
export class RegionsDaoService {
  constructor(private apiService: ApiService) {}

  fetchRegions(): Observable<Region[]> {
    return this.apiService
      .get<ApiRegion>({
        endpoint: "https://restcountries.com/v3.1/all?fields=region",
      })
      .pipe(
        map((regions) => {
          return regions.map((region) => new Region(region));
        })
      );
  }

  fetchCountries(region: string): Observable<Country[]> {
    return this.apiService
      .get<ApiCountry>({
        endpoint: `https://restcountries.com/v3.1/region/${region}?fields=name`,
      })
      .pipe(
        map((countries) => {
          return countries.map((country) => new Country(country));
        })
      );
  }
}
