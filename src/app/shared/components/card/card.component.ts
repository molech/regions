import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.sass"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  // @Input() centerHorizontal = false;
  // @Input() centerVertical = false;
}
