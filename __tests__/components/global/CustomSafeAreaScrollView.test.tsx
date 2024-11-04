import {describe, expect, test} from '@jest/globals';
import {render} from '@testing-library/react-native';
import {Text} from 'react-native';
import CustomSafeAreaScrollView from '../../../src/components/global/CustomSafeAreaViewScroll';
import React from 'react';

describe('CustomSafeAreaScrollView.tsx', () => {
  test('should render children correctly', () => {
    const {getByText} = render(
      <CustomSafeAreaScrollView>
        <Text>Hello ji</Text>
      </CustomSafeAreaScrollView>,
    );
    expect(getByText('Hello ji')).toBeTruthy();
  });
});
