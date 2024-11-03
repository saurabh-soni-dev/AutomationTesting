import {describe, expect, it} from '@jest/globals';
import {fireEvent, render, screen} from '@testing-library/react-native';
import FooterTextTouchable from '../../../src/components/ui/FooterTextTouchable';

describe('FooterTextTouchabke.ts', () => {
  const mockOnPress = jest.fn(() => {});
  const text = 'Login';

  it('it should be render button correctly', () => {
    render(<FooterTextTouchable text={text} onPress={mockOnPress} />);
    const titleText = screen.getByText(text);

    const style = screen.getByTestId('footer-view');
    const buttonPress = screen.getByTestId('footer-button');
    fireEvent.press(buttonPress);

    expect(titleText).toBeTruthy();
    expect(mockOnPress).toHaveBeenCalled();

    expect(style).toHaveStyle({
      position: 'relative',
      alignSelf: 'center',
    });
  });
});
