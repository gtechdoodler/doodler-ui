import React from 'react';

import ExampleFieldSet from '../ExampleFieldSet';
import Select from '../../components/common/inputs/Select';
import Option from '../../components/common/inputs/SelectOption';
import WithLabel from '../../components/common/hocs/WithLabel';

import sortedUsers from '../sortedUsers';

const Default: React.FC = () => {

  return (
    <ExampleFieldSet legend="Default">
      <WithLabel block labelText="Assign Item:">
        <Select name="AssignTo" tabIndex={0}>
          {
            sortedUsers.map((obj) =>
              <Option key={obj.id} value={obj.id?.toString()}>{obj.name}</Option>
            )
          }
        </Select>
      </WithLabel>
    </ExampleFieldSet>
  )
}


export default Default;