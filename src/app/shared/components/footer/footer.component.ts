import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  TemplateRef,
} from "@angular/core";

import { ModalService } from "../../services/modal/modal.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.sass"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  @ViewChild("modalAboutMe", { static: true })
  modalAboutMeTemplate!: TemplateRef<unknown>;
  modalTitle = "sdfsdfsdfffffffffffff";
  modalContent = "asddd";

  constructor(private modalService: ModalService) {}

  showAuthorInfo() {
    this.modalService.open({
      modalId: "authorInfo",
      templateRef: this.modalAboutMeTemplate,
    });
  }
}
