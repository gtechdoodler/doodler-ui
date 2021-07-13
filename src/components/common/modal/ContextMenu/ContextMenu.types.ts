import { MouseEvent } from 'react';

export interface ContextMenuProps extends React.HTMLProps<HTMLDivElement> {
  onOverlayClick?: (ev: MouseEvent) => void;
}