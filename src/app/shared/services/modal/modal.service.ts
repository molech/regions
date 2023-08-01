import { Injectable, TemplateRef } from "@angular/core";
import { Dialog, DialogRef } from "@angular/cdk/dialog";

@Injectable({
  providedIn: "root",
})
export class ModalService {
  private dialogs = new Map<string, DialogRef>();
  constructor(public dialog: Dialog) {}

  open<T>(options: OpenModalOptions<T>) {
    const { noBackdrop, disableBackdropClose, data } = options;

    const dialogRef: DialogRef = this.dialog.open(options.templateRef, {
      hasBackdrop: !noBackdrop,
      disableClose: !!disableBackdropClose,
      data,
    });

    this.closeAllModals();
    this.dialogs.set(options.modalId, dialogRef);

    return dialogRef;
  }

  close(modalId: string) {
    this.dialogs.get(modalId)?.close();
    this.dialogs.delete(modalId);
  }

  private closeAllModals() {
    [...this.dialogs.keys()].forEach((modalId) => this.close(modalId));
  }
}

export interface OpenModalOptions<T = unknown> {
  modalId: string;
  templateRef: TemplateRef<unknown>;
  noBackdrop?: boolean;
  disableBackdropClose?: boolean;
  data?: T;
}
