import React, { useRef, useState } from 'react';

import BemIt from '@gtechdoodler/bem-it';
import ExampleFieldSet from '../ExampleFieldSet';
import Select from '../../components/common/inputs/select/Select';
import Option from '../../components/common/inputs/select/SelectOption';
import TextField from '../../components/common/inputs/TextField';

import sortedUsers from '../sortedUsers';
import './WithFilter.scss';

const WithFilter: React.FC = () => {
  const block = new BemIt('WithFilter');
  const textFieldRef = useRef<HTMLInputElement>(null);
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

  const handleShowOptions = () => {
    textFieldRef.current?.focus();
  }

  return (
    <ExampleFieldSet legend="With Filter">
      <Select
        className={block.el('select').out}
        onHideOptions={handleHideOptions}
        onShowOptions={handleShowOptions}
        tabIndex={0}
      >
        <Option>
          <TextField
            placeholder="Search for a user"
            onChange={handlerFilterChange}
            ref={textFieldRef}
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