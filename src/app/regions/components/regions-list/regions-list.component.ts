import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
} from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Router } from "@angular/router";

import { Region } from "../../types/regions-models";
import { RegionsApiService } from "../../services/regions-api.service";

@Component({
  selector: "app-regions-list",
  templateUrl: "./regions-list.component.html",
  styleUrls: ["./regions-list.component.sass"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegionsListComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  regions: string[] = [];

  constructor(
    private regionsApiService: RegionsApiService,
    private changeDetector: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.getRegions();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  goToRegion(regionName: string) {
    this.router.navigate([`/regions/${regionName}`]);
  }

  private getRegions() {
    this.regionsApiService
      .fetchRegions()
      .pipe(takeUntil(this.destroy$))
      .subscribe((regions: Region[]) => {
        const uniqueRegionNames = [
          ...new Set(
            regions
              .filter((regionItem: Region) => regionItem.region !== "Antarctic")
              .map((regionItem: Region) => regionItem.region)
          ),
        ];
        this.regions = uniqueRegionNames;
        this.changeDetector.detectChanges();
      });
  }
}
