import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyAV7gzAuLHy-Dq-LEu6oZUz2lu0eE0oi6I';

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
} 


ReactDOM.render(<App />, document.querySelector('.container'));