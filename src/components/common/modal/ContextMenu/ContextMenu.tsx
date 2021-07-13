import React from 'react';

import { ContextMenuProps } from './ContextMenu.types';
import BemIt, { addClass } from '@gtechdoodler/bem-it';
import Overlay from '../Overlay';

import './ContextMenu.scss';

const ContextMenu: React.FC<ContextMenuProps> = ({ className, onOverlayClick, ...props }) => {
  const block = new BemIt('ContextMenu');

  return (
    <>
      <div className={addClass(className).after(block)} {...props}>
        {props.children}
      </div>
      <Overlay className={block.el('overlay').out}
        onClick={onOverlayClick}
      />    
    </>
  )
}

export default ContextMenu;