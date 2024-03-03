export interface IGetLocationCurrentMeasuresRequest {
  locationId: number;
}

export interface IGetLocationCurrentMeasuresResponse {
  locationId: number;
  locationName: string;
  serialno: number;
  pm01: number;
  pm02: number;
  pm10: number;
  pm003Count: number;
  atmp: number;
  rhum: number;
  rco2: number;
  tvoc: number;
  tvocIndex: number;
  noxIndex: number;
  wifi: number;
  datapoints: number;
  timestamp: string;
  firmwareVersion: string;
}
