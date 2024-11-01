import {render} from '@testing-library/react-native';
import App from '../App';

test('SNAPSHOT OF APP ', () => {
  const {toJSON} = render(<App />);
  expect(toJSON()).toMatchSnapshot();
});
