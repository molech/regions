import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-countries-list",
  templateUrl: "./countries-list.component.html",
  styleUrls: ["./countries-list.component.sass"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountriesListComponent {}
