import {
  ChangeDetectionStrategy,
  Component,
  ChangeDetectorRef,
} from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Router, ActivatedRoute } from "@angular/router";

import { Country } from "../../types/regions-models";
import { RegionsApiService } from "../../services/regions-api.service";

@Component({
  selector: "app-country-details",
  templateUrl: "./country-details.component.html",
  styleUrls: ["./country-details.component.sass"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryDetailsComponent {
  private readonly destroy$ = new Subject<void>();
  country: Country | null = null;

  constructor(
    private regionsApiService: RegionsApiService,
    private changeDetector: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const countryName = params.get("country");
      this.getCountryDetails(countryName!);
    });
  }

  private getCountryDetails(countryName: string) {
    this.regionsApiService
      .fetchCountryDetails(countryName)
      .pipe(takeUntil(this.destroy$))
      .subscribe((country: Country) => {
        this.country = country;
        this.changeDetector.detectChanges();
      });
  }
}
