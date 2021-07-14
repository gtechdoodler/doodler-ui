import { ReactElement } from 'react';

export interface SelectProps {
  className?: string;
  downArrowIcon?: ReactElement;
  name?: string;
  onChange?: (value: string) => void;
  onHideOptions?: () => void;
  onShowOptions?: () => void;
  tabIndex?: number;
  value?: string;
}