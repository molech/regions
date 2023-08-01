import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  ViewEncapsulation,
  EventEmitter,
} from "@angular/core";

import { DialogModule } from "@angular/cdk/dialog";
import { ModalService } from "../../services/modal/modal.service";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.sass"],
})
export class ModalComponent {
  @Input() modalId = "";
  @Input() isCloseButtonVisible = true;
  @Output() closeModal = new EventEmitter<void>();

  constructor(public modalService: ModalService) {}

  close() {
    this.closeModal.emit();
    this.modalService.close(this.modalId);
  }
}
