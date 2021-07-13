import React from 'react';

import { SelectItemProps } from './SelectOption.types';
import BemIt, { addClass } from '@gtechdoodler/bem-it';

import './SelectOption.scss';

const SelectItem: React.FC<SelectItemProps> = ({ className, value, ...props }) => {
  const block = new BemIt('SelectItem');

  return (
    <div className={addClass(className).after(block.mod({ noSelect: value == null }))}
      data-value={value}
    >
      {props.children}
    </div>
  )
}

export default SelectItem;
