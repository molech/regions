import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
} from "@angular/core";
import { Subject } from "rxjs";
import { finalize, takeUntil } from "rxjs/operators";

import { RegionsDaoService } from "../../services/regions.dao.service";
import { Region, Country } from "../../types/regions-model";

// interface Country {
//   name: string;
//   capital: string;
//   population: number;
// }

@Component({
  selector: "app-regions-list",
  templateUrl: "./regions-list.component.html",
  styleUrls: ["./regions-list.component.sass"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegionsListComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  countries: Country[] = [];
  regions: Region[] = [];

  constructor(
    private regionsDaoService: RegionsDaoService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getRegions();
  }

  private getRegions() {
    this.regionsDaoService
      .fetchRegions()
      .pipe(takeUntil(this.destroy$))
      .subscribe((regions) => {
        this.regions = regions;
        const uniqueRegionNames = [
          ...new Set(regions.map((item: Region) => item.region)),
        ];
        this.regions = uniqueRegionNames
          .map((regionName) => new Region({ region: regionName }))
          .sort((a, b) => (a.region > b.region ? 1 : -1));
        this.changeDetector.detectChanges();
      });
  }

  private getCountries() {
    this.regionsDaoService
      .fetchCountries("europe")
      .pipe(takeUntil(this.destroy$))
      .subscribe((countries) => {
        this.countries = countries;
        console.log(this.countries);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
