import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-country-details",
  templateUrl: "./country-details.component.html",
  styleUrls: ["./country-details.component.sass"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryDetailsComponent {}
