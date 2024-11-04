import {describe, expect, it, jest, test} from '@jest/globals';
import {fireEvent, render} from '@testing-library/react-native';
import CustomHeading from '../../../src/components/global/CustomHeading';
import {goBack} from '../../../src/utils/NavigationUtil';
import React from 'react';

// Mock the goBack funtion
jest.mock('../../../src/utils/NavigationUtil', () => ({
  goBack: jest.fn(),
}));

describe('CustomHeading.tsx', () => {
  test('Should render the title correctly', () => {
    const title = 'test title';
    const {getByText} = render(<CustomHeading title={title} />);
    expect(getByText(title)).toBeTruthy();
  });

  it('should call  go back when back button press', () => {
    const title = 'test title';
    const {getByTestId} = render(<CustomHeading title={title} />);
    const backButton = getByTestId('back-button');
    fireEvent.press(backButton);
    expect(goBack).toHaveBeenCalled();
  });
});
