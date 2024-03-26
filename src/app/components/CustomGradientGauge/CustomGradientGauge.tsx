import dynamic from 'next/dynamic';
const GaugeComponent = dynamic(() => import('react-gauge-component'), {
  ssr: false,
});
import styles from './CustomGradientGauge.module.scss';
import { ICustomGradientGaugeProps } from './CustomGradientGauge.models';
import { COLORS } from '../../../../constants';
const CustomGradientGauge = ({
  value,
  limits,
  label,
  valueSuffix = '',
  tickSuffix = '',
  min = 0,
  max = 100,
}: ICustomGradientGaugeProps) => {
  return (
    <div className={styles.customGradientGauge}>
      <p className={styles.customGradientGauge_label}>{label}</p>
      <GaugeComponent
        type='semicircle'
        minValue={min}
        maxValue={max}
        arc={{
          gradient: true,
          subArcs: limits.map((limit, index) => ({
            limit: limit.value,
            color: limit.color,
          })),
        }}
        pointer={{
          color: COLORS.grey,
          length: 0.8,
          width: 10,
        }}
        labels={{
          valueLabel: {
            formatTextValue: (value) => `${value}${valueSuffix}`,
            style: {
              fontSize: '40px',
              textShadow:
                'black 1px 0.5px 0px, black 0px 0px 0.03em, black 0px 0px 0.01em',
            },
          },
          tickLabels: {
            defaultTickValueConfig: {
              formatTextValue: (value: any) => `${value}${tickSuffix}`,
            },
          },
        }}
        value={value}
      />
    </div>
  );
};

export default CustomGradientGauge;
