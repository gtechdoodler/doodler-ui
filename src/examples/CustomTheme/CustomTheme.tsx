import React from 'react';

import BemIt from '@gtechdoodler/bem-it';
import ExampleFieldSet from '../ExampleFieldSet';
import Select from '../../components/common/inputs/select/Select';
import Option from '../../components/common/inputs/select/SelectOption';

import sortedUsers from '../sortedUsers';
import './CustomTheme.scss';

const CustomTheme: React.FC = () => {
  const block = new BemIt('CustomTheme');

  return (
    <ExampleFieldSet legend="Custom Theme">
      <Select className={block.el('select').out} tabIndex={0}>
        {
          sortedUsers.map((obj) =>
            <Option key={obj.id} value={obj.id?.toString()}>{obj.name}</Option>
          )
        }
      </Select>      
    </ExampleFieldSet>
  )
}


export default CustomTheme;