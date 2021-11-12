import React from 'react';
import renderer from 'react-test-renderer';
import useFakeTimers = jest.useFakeTimers;
import App from '../App';

useFakeTimers();
describe('App Test', () => {
  it('renders correctly', () => {
    renderer.create(<App />);
  });
});
