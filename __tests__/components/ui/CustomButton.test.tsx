import {describe, expect, it} from '@jest/globals';
import {render, screen} from '@testing-library/react-native';
import CustomButton from '../../../src/components/ui/CustomButton';
import {Colors} from '../../../src/utils/Colors';

describe('CustomButton.tsx', () => {
  const mockOnPress = jest.fn();
  const title = 'Save';
  const loading = true;
  const backgroundColor = Colors.borderColor;
  const textColor = Colors.borderLight;

  it('should render the button with the correct title', () => {
    render(<CustomButton title={title} onPress={mockOnPress} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  it('should display loading indicator when loading is true', () => {
    render(
      <CustomButton
        title={title}
        onPress={mockOnPress}
        loading={loading}
        backgroundColor={backgroundColor}
      />,
    );

    const activityIndicator = screen.getByTestId('activity-indicator');
    // Verify the loading indicator is present
    expect(activityIndicator).toBeTruthy();

    // Check if onPress is not called when loading is true
    expect(mockOnPress).not.toHaveBeenCalled();
  });
});
