import { HttpResponse } from "@angular/common/http";

export class ApiResponse<T> {
  constructor(private response: HttpResponse<T>) {}

  get data() {
    return this.response.body as T;
  }
}
