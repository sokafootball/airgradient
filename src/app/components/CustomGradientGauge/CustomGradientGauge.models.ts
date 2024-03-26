export interface ICustomGradientGaugeProps {
  limits: { value: number; color: string }[];
  label: string;
  value: number;
  valueSuffix?: string;
  tickSuffix?: string;
  min?: number;
  max?: number;
}
