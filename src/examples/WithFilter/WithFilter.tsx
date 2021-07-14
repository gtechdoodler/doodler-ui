import React, { useState } from 'react';

import BemIt from '@gtechdoodler/bem-it';
import ExampleFieldSet from '../ExampleFieldSet';
import Select from '../../components/common/inputs/Select';
import Option from '../../components/common/inputs/SelectOption';
import TextField from '../../components/common/inputs/TextField';

import sortedUsers from '../sortedUsers';
import './WithFilter.scss';

const WithFilter: React.FC = () => {
  const block = new BemIt('WithFilter');
  const [filteredUsers, setFilteredUsers] = useState(sortedUsers);

  const handlerFilterChange = (ev: React.FormEvent<HTMLInputElement>) => {
    const filterText = ev.currentTarget.value;
    setFilteredUsers(sortedUsers.filter((user) =>
      user.name.toLowerCase().includes(filterText.toLowerCase()))
    );
  }

  const handleHideOptions = () => {
    setFilteredUsers(sortedUsers);
  }

  return (
    <ExampleFieldSet legend="With Filter">
      <Select
        className={block.el('select').out}
        onHideOptions={handleHideOptions}
        tabIndex={0}
      >
        <Option>
          <TextField
            placeholder="Search for a user"
            onChange={handlerFilterChange}
            tabIndex={1}
          />
        </Option>
        {
          filteredUsers.map((obj) =>
            <Option key={obj.id} value={obj.id?.toString()}>
              <span>{obj.name}</span>
            </Option>
          )
        }
      </Select>      
    </ExampleFieldSet>
  )
}


export default WithFilter;