import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  Router,
  ParamMap,
  ActivatedRouteSnapshot,
} from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.sass"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  previousPageUrl = "/";

  constructor(private router: Router, private route: ActivatedRoute) {}

  navigateBack() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const region = params.get("region");
      if (region) {
        this.router.navigate(["../"], { relativeTo: this.route });
      } else {
        this.router.navigate(["/regions"]);
      }
    });
  }
}
