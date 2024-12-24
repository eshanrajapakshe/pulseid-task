import { CSSProperties, ReactNode } from 'react';
import classNames from 'classnames';
import './index.scss';

interface IProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h6-2' | 'p';
  color?: string;
  style?: CSSProperties;
  children?: ReactNode;
  customClassName?: string;
}

interface ITypography {
  [key: string]: keyof JSX.IntrinsicElements;
}

const variantsMapping: ITypography = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  'h6-2': 'h6', 
  p: 'p',
};

export const Typography = ({
  variant = 'p',
  color,
  style,
  children,
  customClassName,
  ...rest
}: IProps) => {

  const Component = variantsMapping[variant] || 'p';

  return (
    <Component
      className={classNames(
        {
          [`typography--variant-${variant}`]: variant,
          [`typography--color-${color}`]: color,
        },
        customClassName
      )}
      {...rest}
      style={style}
    >
      {children}
    </Component>
  );
};
