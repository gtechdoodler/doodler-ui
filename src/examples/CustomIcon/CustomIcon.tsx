import React from 'react';

import CustomSelectIcon from '@material-ui/icons/UnfoldMore';
import ExampleFieldSet from '../ExampleFieldSet';
import Select from '../../components/common/inputs/select/Select';
import Option from '../../components/common/inputs/select/SelectOption';

import sortedUsers from '../sortedUsers';

const Default: React.FC = () => {

  return (
    <ExampleFieldSet legend="Custom Icon">
      <Select downArrowIcon={<CustomSelectIcon />} tabIndex={0}>
        {
          sortedUsers.map((obj) =>
            <Option key={obj.id} value={obj.id?.toString()}>{obj.name}</Option>
          )
        }
      </Select>      
    </ExampleFieldSet>
  )
}


export default Default;