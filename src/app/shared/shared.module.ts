import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DialogModule, Dialog } from "@angular/cdk/dialog";
import { HttpClient } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LogoComponent } from "./components/logo/logo.component";
import { CardComponent } from "./components/card/card.component";
import { ButtonComponent } from "./components/button/button.component";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { ModalComponent } from "./components/modal/modal.component";

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LogoComponent,
    CardComponent,
    ButtonComponent,
    SpinnerComponent,
    ModalComponent,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    LogoComponent,
    CardComponent,
    ButtonComponent,
    SpinnerComponent,
    ModalComponent,
    DialogModule,
    TranslateModule,
  ],
  providers: [Dialog],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule.forRoot({
      defaultLanguage: "pl",
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) =>
          new TranslateHttpLoader(http, "./assets/i18n/", ".json"),
        deps: [HttpClient],
      },
    }),
  ],
})
export class SharedModule {}
