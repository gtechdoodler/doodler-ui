import React from 'react';

import { OverlayProps } from './Overlay.types';
import BemIt, { addClass } from '@gtechdoodler/bem-it';

import './Overlay.scss';

const Overlay: React.FC<OverlayProps> = ({ className, onClick }) => {
  const block = new BemIt('Overlay');

  return (
    <div className={addClass(className).after(block)} onClick={onClick}></div>
  )
}

export default Overlay;