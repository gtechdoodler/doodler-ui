import { ReactElement } from 'react';

export interface SelectProps {
  className?: string;
  downArrowIcon?: ReactElement;
  name?: string;
  onHideOptions?: () => void;
  onShowOptions?: () => void;
  tabIndex?: number;
  value?: string;
}