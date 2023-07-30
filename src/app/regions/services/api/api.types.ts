export interface RequestOptions<T> {
  endpoint: string;
  payload?: T;
  responseType?: "arraybuffer" | "blob" | "json" | "text";
}
