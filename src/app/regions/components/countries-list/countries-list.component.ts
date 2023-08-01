import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
} from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Router, ActivatedRoute } from "@angular/router";

import { Country } from "../../types/regions-models";
import { RegionsApiService } from "../../services/regions-api.service";

@Component({
  selector: "app-countries-list",
  templateUrl: "./countries-list.component.html",
  styleUrls: ["./countries-list.component.sass"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountriesListComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  countries: Country[] = [];
  regionName!: string | null;

  constructor(
    private regionsApiService: RegionsApiService,
    private changeDetector: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.regionName = params.get("region");
      this.getCountries(this.regionName!);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  goToCountry(countryName: string) {
    this.router.navigate([`/regions/${this.regionName}/${countryName}`]);
  }

  private getCountries(regionName: string) {
    this.regionsApiService
      .fetchCountriesByRegion(regionName)
      .pipe(takeUntil(this.destroy$))
      .subscribe((countries: Country[]) => {
        this.countries = countries;
        this.changeDetector.detectChanges();
      });
  }
}
