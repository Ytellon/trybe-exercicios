import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import getPostsBySubreddit from '../services/redditAPI';
import RedditContext from './RedditContext';

function RedditProvider({ children }) {
  const [postsBySubreddit, setPostsBySubreddit] = useState({ frontend: {}, reactjs: {} });
  const [selectedSubreddit, setSelectedSubreddit] = useState('reactjs');
  const [shouldRefreshSubreddit, setShouldRefreshSubreddit] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const shouldFetchPosts = () => {
    const posts = postsBySubreddit[selectedSubreddit];

    if (!posts.items) return true;
    if (isFetching) return false;
    return shouldRefreshSubreddit;
  };

  const handleFetchSuccess = (json) => {
    const lastUpdated = Date.now();
    const items = json.data.children.map((child) => child.data);

    setShouldRefreshSubreddit(false);
    setIsFetching(false);
    setPostsBySubreddit({
      ...postsBySubreddit,
      [selectedSubreddit]: {
        lastUpdated,
        items,
      },
    });
  };

  const handleFetchError = (error) => {
    setShouldRefreshSubreddit(false);
    setIsFetching(false);
    setPostsBySubreddit({
      ...postsBySubreddit,
      [selectedSubreddit]: {
        error: error.message,
        items: [],
      },
    });
  };

  const fetchPosts = () => {
    if (!shouldFetchPosts()) return;

    setShouldRefreshSubreddit(false);
    setIsFetching(true);

    getPostsBySubreddit(selectedSubreddit)
      .then(handleFetchSuccess)
      .catch(handleFetchError);
  };

  useEffect(() => {
    fetchPosts();
  }, [selectedSubreddit, shouldRefreshSubreddit]);

  const handleSubredditChange = (selected) => setSelectedSubreddit(selected);

  const handleRefreshSubreddit = () => setShouldRefreshSubreddit(true);

  const context = {
    selectSubreddit: handleSubredditChange,
    fetchPosts,
    refreshSubreddit: handleRefreshSubreddit,
    availableSubreddits: Object.keys(postsBySubreddit),
    posts: postsBySubreddit[selectedSubreddit].items,
  };

  return (
    <RedditContext.Provider value={ context }>
      {children}
    </RedditContext.Provider>
  );
}

export default RedditProvider;

RedditProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
