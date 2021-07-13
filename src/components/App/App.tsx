import React from 'react';

import BemIt from '@gtechdoodler/bem-it';
import DefaultExample from '../../examples/Default';
import CustomIconExample from '../../examples/CustomIcon';
import CustomOptionExample from '../../examples/CustomOption';
import CustomThemeExample from '../../examples/CustomTheme';
import WithFilter from '../../examples/WithFilter';

import './App.scss';

const App: React.FC = () => {
  const block = new BemIt('App');
  
  return (
    <div className={block.out}>
      <DefaultExample />
      <CustomIconExample />
      <CustomOptionExample />
      <WithFilter />
      <CustomThemeExample />

      <div className={block.el('snagContainer').out}>
        <h2>Outstanding</h2>
        <ul>
          <li>Add subtle box-shadow to Select component.</li>
          <li>Apply accessibility aria-attributes and roles.</li>
          <li>Invalidate the children of Select, which should always be SelectOption nodes.</li>
          <li>Unit tests.</li>
          <li>Document and comment code.</li>
          <li>Create export.d.ts and set up a publish dir.</li>
          <li>Publish npm test package and document readme.</li>
        </ul>
      </div>

      <div className={block.el('snagContainer').out}>
        <h2>Improvements</h2>
        <ul>
          <li>Improve how the Select options' menu scales in the available space, specifically when opened at the bottom of the window.</li>
          <li>Test excessive amount of data with a filtering text field debounce. Although, perhaps the wrong component for excessive data set.</li>
          <li>Consider including a fuzzy searching.</li>
          <li>Flexibility and scalability is key in a design sys, but there's a bit of boilerplate setting up the filter variation. Investigate refactoring.</li>
          <li>Add alias paths to project, avoiding unsightly relative import paths.</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
