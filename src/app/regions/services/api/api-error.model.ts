import { HttpErrorResponse, HttpStatusCode } from "@angular/common/http";

export class ApiError {
  constructor(private error: HttpErrorResponse) {}

  get message() {
    return this.error.message;
  }

  get status() {
    return this.error.status;
  }

  isAuthentcationError() {
    return (
      this.status === HttpStatusCode.Unauthorized ||
      this.status === HttpStatusCode.Forbidden
    );
  }
}
