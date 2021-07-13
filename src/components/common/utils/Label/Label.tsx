import React from 'react';

import { LabelProps } from './Label.types';
import BemIt, { addClass } from '@gtechdoodler/bem-it';

import './Label.scss';

const Label: React.FC<LabelProps> = ({ className, ...props }) => {
  const block = new BemIt('Label');

  return (
    <label className={addClass(className).after(block)}>
      { props.children }
    </label>
  )
}

export default Label;