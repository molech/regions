import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from "@angular/core";

import { ElementSizes } from "../../types/sizes";

import { CommonModule } from "@angular/common";

@Component({
  selector: "[appButton]",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.sass"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() size: ElementSizes = "md";
  @Input() icon?: string;
  @Input() iconPosition?: "left" | "right";

  @HostBinding("class") get hostClasses() {
    return this.getButtonClasses();
  }

  private getSizeClasses(): string {
    switch (this.size) {
      case "sm":
        return `btn--small`;
      case "lg":
        return `btn--large`;
      default:
        return "";
    }
  }

  private getIconPositionClasses(): string {
    return this.iconPosition === "left" ? "btn--icon-left" : "";
  }

  private getButtonClasses(): string {
    return this.getSizeClasses() + " " + this.getIconPositionClasses();
  }
}
