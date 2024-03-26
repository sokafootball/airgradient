import { COLORS } from '../../../../constants';
import { IStringMeasurementProps } from './StringMeasurement.models';
import styles from './StringMeasurement.module.scss';

const StringMeasurement = ({
  value,
  label,
  valueSuffix = '',
  limits,
}: IStringMeasurementProps) => {
  const color =
    limits?.find((limit) => value <= limit.value)?.color || COLORS.white;
  return (
    <div className={styles.stringMeasurement}>
      <p className={styles.stringMeasurement_label}>{label}</p>
      <div
        className={styles.stringMeasurement_outerCircle}
        style={{ backgroundColor: color }}
      >
        <div className={styles.stringMeasurement_outerCircle_innerCircle}>
          <p
            className={styles.stringMeasurement_outerCircle_innerCircle_value}
            style={{ color }}
          >
            {Math.round(value)} {valueSuffix}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StringMeasurement;
