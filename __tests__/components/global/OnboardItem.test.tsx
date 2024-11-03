import {describe, expect, test} from '@jest/globals';
import {render} from '@testing-library/react-native';
import OnboardItem from '../../../src/components/global/OnboardItem';

describe('OnboardItem.tsx', () => {
  const mockOnPressFirst = jest.fn();
  const mockOnPressSecond = jest.fn();

  const imageSource = require('../../../src/assets/images/logo.png');

  const title = 'Next';
  const subtitle = 'SubNext';
  const buttonTitleFirst = 'Saurabh';
  const buttonTitleSecond = 'Rahul';

  test('should be render item correctly', () => {
    const {getByText, getByTestId} = render(
      <OnboardItem
        imageSource={imageSource}
        title={title}
        subtitle={subtitle}
        onPressFirst={mockOnPressFirst}
        buttonTitleFirst={buttonTitleFirst}
      />,
    );

    expect(getByText(title)).toBeTruthy();
    expect(getByText(subtitle)).toBeTruthy();
    expect(getByText(buttonTitleFirst)).toBeTruthy();
    expect(getByTestId('background-image')).toBeTruthy();
  });

  test('should be render item correctly', () => {
    const {getByText, getByTestId} = render(
      <OnboardItem
        imageSource={imageSource}
        title={title}
        subtitle={subtitle}
        onPressFirst={mockOnPressFirst}
        buttonTitleFirst={buttonTitleFirst}
        onPressSecond={mockOnPressSecond}
        buttonTitleSecond={buttonTitleSecond}
      />,
    );

    expect(getByText(title)).toBeTruthy();
    expect(getByText(subtitle)).toBeTruthy();
    expect(getByText(buttonTitleFirst)).toBeTruthy();
    expect(getByText(buttonTitleSecond)).toBeTruthy();
    expect(getByTestId('background-image')).toBeTruthy();
  });
});
