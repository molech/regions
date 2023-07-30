import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
  HttpParams,
} from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Observable, throwError, Subject } from "rxjs";

import { ApiResponse } from "./api-response.model";
import { ApiError } from "./api-error.model";
import { RequestOptions } from "./api.types";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private errorsNotifier$ = new Subject<ApiError>();
  readonly errors$ = this.errorsNotifier$.asObservable();

  constructor(private httpClient: HttpClient) {}

  private processRequest<R>(
    request$: Observable<HttpResponse<R>>
  ): Observable<R> {
    return request$.pipe(
      catchError((error: HttpErrorResponse) => {
        const apiError = new ApiError(error);
        this.errorsNotifier$.next(apiError);
        return throwError(() => error);
      }),
      map((response) => response.body!)
    );
  }

  get<R = unknown>(options: RequestOptions<R[]>): Observable<R[]> {
    const request$ = this.httpClient.get<R[]>(`${options.endpoint}`, {
      observe: "response",
      withCredentials: true,
      responseType: (options.responseType as "json") || "json",
    });

    return this.processRequest<R[]>(request$);
  }
}
