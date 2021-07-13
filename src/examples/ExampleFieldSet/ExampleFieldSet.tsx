import React from 'react';

import { ExampleFieldSetProps } from './ExampleFieldSet.types';
import BemIt from '@gtechdoodler/bem-it';

import './ExampleFieldSet.scss';

const ExampleFieldSet: React.FC<ExampleFieldSetProps> = ({ legend, ...props }) => {
  const block = new BemIt('ExampleFieldSet');

  return (
    <fieldset className={block.out}>
      <legend>{ legend }</legend>
      { props.children }       
    </fieldset>
  )
}

export default ExampleFieldSet;