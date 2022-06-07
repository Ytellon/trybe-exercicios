import React, { useContext } from 'react';

import RedditContext from '../context/RedditContext';

function Selector() {
  const {
    selectedSubreddit,
    availableSubreddits,
    selectSubreddit } = useContext(RedditContext);

  return (
    <div>
      <h1>{`Selected: ${selectedSubreddit}`}</h1>
      <select
        onChange={ (e) => selectSubreddit(e.target.value) }
        value={ selectedSubreddit }
      >
        {availableSubreddits.map((option) => (
          <option
            value={ option }
            key={ option }
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Selector;
