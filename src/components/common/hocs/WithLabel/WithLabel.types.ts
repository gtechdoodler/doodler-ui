import { LabelProps } from '../../utils/Label/Label.types';

export interface WithLabelProps extends LabelProps {
  className?: string
  block?: boolean
  inline?: boolean
  labelText: string
  reverse?: boolean
  right?: boolean
};