import React, { MouseEvent } from "react";

export interface OverlayProps {
  className?: string;
  onClick?: (ev: MouseEvent) => void;
}