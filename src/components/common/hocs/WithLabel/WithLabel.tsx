import React from 'react';

import { WithLabelProps } from './WithLabel.types';
import BemIt, { addClass } from '@gtechdoodler/bem-it';
import Label from '../../utils/Label';

import './WithLabel.scss';

const WithLabel: React.FC<WithLabelProps> = (props) => {
  const block = new BemIt('WithLabel');
  const {
    className,
    block: blockProp,
    inline,
    labelText,
    reverse,
    right
  } = props;

  return (
    <div className={block.mod({ block: blockProp, inline, right }).out}>
      {
        (reverse == true) && props.children
      }
      <Label
        className={addClass(className).after(block.el('label'))}
        {...props}
      >
        {labelText}
      </Label>
      {
        (!reverse) && props.children
      }
    </div>
  )
}

export default WithLabel;