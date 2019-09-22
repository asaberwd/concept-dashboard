import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Orders from './Orders';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Orders /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
