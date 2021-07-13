import React from 'react';

import BemIt from '@gtechdoodler/bem-it';
import ExampleFieldSet from '../ExampleFieldSet';
import Select from '../../components/common/inputs/select/Select';
import Option from '../../components/common/inputs/select/SelectOption';

import sortedUsers from '../sortedUsers';
import './CustomOption.scss';

const CustomOption: React.FC = () => {
  const block = new BemIt('CustomOption');

  return (
    <ExampleFieldSet legend="Custom Option">
      <Select tabIndex={0}>
        {
          sortedUsers.map((obj) =>
            <Option key={obj.id} value={obj.id?.toString()}>
              <span className={block.el('avatar').out}></span>
              <span className={block.el('user').out}>{obj.name}</span>
            </Option>
          )
        }
      </Select>      
    </ExampleFieldSet>
  )
}


export default CustomOption;