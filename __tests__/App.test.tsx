import {describe, expect, it} from '@jest/globals';
import {render} from '@testing-library/react-native';
import App from '../App';

describe('App Snapshot::', () => {
  it('Snapshot testing:: App', () => {
    const {toJSON} = render(<App />);
    expect(toJSON()).toMatchSnapshot();
  });
});
