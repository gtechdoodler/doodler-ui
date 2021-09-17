import React, { ReactElement, useEffect, useState } from 'react';

import { SelectProps } from './Select.types';
import BemIt, { addClass } from '@gtechdoodler/bem-it';
import ContextMenu from '../../modal/ContextMenu';
import DownArrow from '@material-ui/icons/ArrowDropDown';

import './Select.scss';

// TODO:
// My intention is to take a material-ui approach, of controlled vs uncontrolled
// state with this component. For example, a client/dev of the component may want
// to take the "React" state approach of "single source of true" to maintain selection
// state in the component, or... this might not be necessary in some cases. It could
// be that the dev just wants the component to manage it's own state, because they
// simple want the selected id, in the change handler, and have no need to set state
// outside of the component context. However, I haven't had time :). So, for now, the
// component does both, and may well render twice if you do choose to set selected
// state in a parent component. Not effecient, but I'm fully aware of it. Putting
// this component together, was more about the 'design' principles and ensuring
// the component is scalable from a customisation perspective.

const Select: React.FC<SelectProps> = (props) => {
  const block = new BemIt('Select');
  const {
    className,
    downArrowIcon,
    name,
    onChange,
    onHideOptions,
    onShowOptions,
    tabIndex,
    value
  } = props;

  const [ showOptions, setShowOptions ] = useState(false);
  const [ selectedElement, setSelectedElement ] = useState<ReactElement>(<></>);
  const [ selectedValue, setSelectedValue ] = useState<string>(value || '');
  const childrenArray = React.Children.toArray(props.children) as React.ReactChild[];

  useEffect(() => {
    childrenArray?.find((child) => {
      if (React.isValidElement(child)) {
        if (child.props.selected) return child;
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.children]);

  useEffect(() => {
    if (showOptions) {
      if (onShowOptions) {
        onShowOptions();
      }
    } else if (onHideOptions) {
      onHideOptions();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showOptions]);

  const setSelectedStates = (element: ReactElement) => {
    setSelectedElement(element);
    setSelectedValue(element.props.value);
  }

  const fireChangeEvent = (element: ReactElement) => {

    // TODO: Just a cheap, immitation change event for now, to get something working.
    if (onChange) {
      onChange(element.props.value);
    }
  }

  const handleSelectClick = () => {
    setShowOptions(!showOptions);
  }

  const getSelectItem = (element: HTMLElement | null | undefined): HTMLElement | null => {    
    return element?.classList.contains('SelectItem')
      ? element
      : getSelectItem(element?.parentElement);
  }

  const handleMenuClick = (ev: React.MouseEvent) => {
    const selectedElement = getSelectItem(ev.target as HTMLElement);
    const selectedValue = selectedElement?.getAttribute('data-value');
    if (selectedValue) {
      for (let i = 0; i < childrenArray.length; i++) {
        const childElement = childrenArray[i] as ReactElement;
        if (childElement.props.value === selectedValue) {
          setSelectedStates(childElement);          
          setShowOptions(false);
          fireChangeEvent(childElement);
          break;
        }
      }
    }
  }

  const handleKeyDown = (ev: React.KeyboardEvent) => {
    if (ev.key === 'Escape') {
      setShowOptions(false);
    } else if (ev.key !== 'Tab') {
      setShowOptions(true);
    }
  }

  const handleOverlayClick = () => {
    setShowOptions(false);
  }

  return (
    <div className={addClass(className).after(block.mod({ expanded: showOptions }))}>
      <div
        className={block.el('input').out}
        onClick={handleSelectClick}
        onKeyDown={handleKeyDown}
        tabIndex={tabIndex}
      >        
        <input name={name} type="hidden" value={selectedValue} />
        <div className={block.el('selected').out}>
          { selectedElement }
        </div>
        { (downArrowIcon != null) ? downArrowIcon : <DownArrow /> }
      </div>
      {
        showOptions && (
          <ContextMenu
            className={block.el('menu').out}
            onClick={handleMenuClick}
            onOverlayClick={handleOverlayClick}
          >
            { props.children }
          </ContextMenu>
        )
      }
    </div>
  )
}

export default Select;
