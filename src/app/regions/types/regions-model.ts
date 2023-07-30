import { ApiRegion, ApiCountry } from "./regions-api";

export class Region {
  region = this.apiRegion?.region || "";

  constructor(private apiRegion: ApiRegion) {}
}

export class Country {
  name = this.apiCountry?.name || "";

  constructor(private apiCountry: ApiCountry) {}
}
