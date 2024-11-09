import clsx from 'clsx';

const DEFAULT_GAP_CLASS = 'gap-4';

const borderRadiusClassMap = {
  ['2xl']: 'rounded-2xl',
  xl: 'rounded-xl',
  lg: 'rounded-lg',
  normal: 'rounded',
  md: 'rounded-md',
  sm: 'rounded-sm',
};

export const justifyClassMap = {
  center: 'justify-center',
  start: 'justify-start',
  end: 'justify-end',
  between: 'justify-between',
  evenly: 'justify-evenly',
};

export const itemsClassMap = {
  center: 'items-center',
  start: 'items-start',
  end: 'items-end',
  baseline: 'items-baseline',
};

export type Direction = 'row' | 'col';
export type Justify = keyof typeof justifyClassMap;
export type Items = keyof typeof itemsClassMap;
export type BorderRadius = keyof typeof borderRadiusClassMap;

export interface BoxProps {
  children?: React.ReactNode | React.ReactNode[];
  as?: React.ElementType;
  refs?: React.MutableRefObject<HTMLElement>;
  className?: string;
  wrap?: boolean;
  justify?: Justify;
  items?: Items;
  col?: boolean;
  borderRadius?: BorderRadius;
}

const Box: FCWC<React.HTMLAttributes<React.ElementType> & BoxProps> = ({
  as: HtmlTag = 'div',
  refs,
  className = '',
  wrap,
  justify,
  items,
  children,
  col,
  borderRadius,
  ...props
}) => {
  const gapClass = !className.includes('gap-') && DEFAULT_GAP_CLASS;
  const justifyClass =
    !className.includes('justify-') && justifyClassMap[justify as Justify];
  const itemsClass =
    !className.includes('items-') && itemsClassMap[items as Items];
  const wrapClass = wrap && 'flex-wrap';
  const directionClass = col && 'flex-col';
  const borderRadiusClass =
    !className.includes('rounded-') &&
    borderRadiusClassMap[borderRadius as BorderRadius];

  return (
    <HtmlTag
      ref={refs}
      className={clsx(
        'flex',
        directionClass,
        itemsClass,
        justifyClass,
        wrapClass,
        gapClass,
        borderRadiusClass,
        className
      )}
      {...props}
    >
      {children}
    </HtmlTag>
  );
};

export const Row: FCWC<
  React.HTMLAttributes<React.ElementType> & Omit<BoxProps, 'col'>
> = (props: Omit<BoxProps, 'col'>) => <Box {...props} />;
export const Stack: FCWC<
  React.HTMLAttributes<React.ElementType> & Omit<BoxProps, 'col'>
> = (props: Omit<BoxProps, 'col'>) => <Box col {...props} />;
