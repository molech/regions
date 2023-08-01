import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Region, Country } from "../types/regions-models";

@Injectable({
  providedIn: "root",
})
export class RegionsApiService {
  private baseUrl = "https://restcountries.com/v3.1";

  constructor(private http: HttpClient) {}

  fetchRegions(): Observable<Region[]> {
    const url = `${this.baseUrl}/all?fields=region`;
    return this.http.get<{ region: string }[]>(url).pipe(
      map((response) => {
        return response
          .map((item) => ({ region: item.region }))
          .sort((a, b) => a.region.localeCompare(b.region));
      })
    );
  }

  fetchCountriesByRegion(regionName: string): Observable<Country[]> {
    const url = `${this.baseUrl}/region/${regionName}?fields=name,flags`;
    return this.http.get<Country[]>(url).pipe(
      map((response) => {
        return response
          .map((item) => item)
          .sort((a, b) => a.name.common.localeCompare(b.name.common));
      })
    );
  }

  fetchCountryDetails(country: string): Observable<Country> {
    const url = `${this.baseUrl}/name/${country}?fullText=true&fields=name`;
    return this.http.get<Country[]>(url).pipe(
      map((response) => {
        return response[0];
      })
    );
  }
}
