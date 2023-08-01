import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ChangeDetectorRef,
} from "@angular/core";
import { Router, NavigationEnd, Event, ActivatedRoute } from "@angular/router";
import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.sass"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  showBackButton = false;
  backUrl = "/regions/Americas";

  constructor(
    private router: Router,
    private changeDetector: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.handleRouteChanges();
  }

  navigateBack() {
    this.router.navigate([this.backUrl]);
  }

  handleRouteChanges() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.rootRoute(this.route)),
        filter((route: ActivatedRoute) => route.outlet === "primary")
      )
      .subscribe((route: ActivatedRoute) => {
        const isCountryRouteActive = route.snapshot.paramMap.has("country");
        const isRegionRouteActive = route.snapshot.paramMap.has("region");
        this.backUrl = isCountryRouteActive
          ? `/regions/${route.snapshot.paramMap.get("region")}`
          : "/regions";
        this.showBackButton = isRegionRouteActive || isCountryRouteActive;
        this.changeDetector.detectChanges();
      });
  }

  private rootRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
}
