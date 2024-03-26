export interface IStringMeasurementProps {
  value: number;
  label: string;
  valueSuffix?: string;
  limits?: { value: number; color: string }[];
}
