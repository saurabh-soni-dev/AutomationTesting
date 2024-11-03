import {describe, expect, it} from '@jest/globals';
import {act, fireEvent, render} from '@testing-library/react-native';
import Input from '../../../src/components/ui/Input';
import {Colors} from '../../../src/utils/Colors';

describe('Input.tsx', () => {
  const value = '';
  const mockOnChangeText = jest.fn();
  const mockOnFocus = jest.fn();
  const mockOnBlur = jest.fn();
  const placeholder = 'Enter text...';
  const error = 'This is not right!';
  const borderColor = Colors.borderColor;
  const disabled = true;

  //   test('SNAPSHOT', () => {
  //     const {toJSON} = render(
  //       <Input
  //         placeholder={placeholder}
  //         value=""
  //         onChangeText={mockOnChangeText}
  //       />,
  //     );
  //     expect(toJSON).toMatchSnapshot();
  //   });

  test('it should render correctly', () => {
    const {getByTestId} = render(
      <Input
        value={value}
        placeholder={placeholder}
        onChangeText={mockOnChangeText}
        disabled={false}
      />,
    );

    act(() => {
      fireEvent(getByTestId('textInput'), 'focus', {});
      fireEvent(getByTestId('textInput'), 'blur', {});
    });

    expect(getByTestId('parent')).toBeTruthy();
  });

  test('it should handle multiple focus and blue events', () => {
    const {getByTestId} = render(
      <Input
        value={value}
        placeholder={placeholder}
        onChangeText={mockOnChangeText}
        onFocus={mockOnFocus}
        onBlur={mockOnBlur}
      />,
    );

    fireEvent(getByTestId('textInput'), 'focus', {});
    fireEvent(getByTestId('textInput'), 'blur', {});
    fireEvent(getByTestId('textInput'), 'focus', {});
    fireEvent(getByTestId('textInput'), 'blur', {});

    expect(mockOnFocus).toHaveBeenCalledTimes(2);
    expect(mockOnBlur).toHaveBeenCalledTimes(2);
  });

  test('it should display error correctly or not', () => {
    const {getByTestId} = render(
      <Input
        value={value}
        placeholder={placeholder}
        onChangeText={mockOnChangeText}
        error={error}
      />,
    );
    expect(getByTestId('errorText')).toHaveTextContent(error);
  });

  test('should be able to apply style  pointerEvents:none', () => {
    const {getByTestId, getByText} = render(
      <Input
        value={value}
        placeholder={placeholder}
        onChangeText={mockOnChangeText}
        disabled
      />,
    );

    const id = getByTestId('parent');
    expect(id).toHaveStyle({
      pointerEvents: 'none',
    });

    expect(getByTestId('textInput').props.editable).toBe(false);
  });

  test('should be able to apply style  pointerEvents:auto', () => {
    const {getByTestId, getByText} = render(
      <Input
        value={value}
        placeholder={placeholder}
        onChangeText={mockOnChangeText}
        disabled={false}
      />,
    );

    const id = getByTestId('parent');
    expect(id).toHaveStyle({
      pointerEvents: 'auto',
    });

    expect(getByTestId('textInput').props.editable).toBe(true);
  });

  test('should call onFocus and seFocus state on input focus', () => {
    const {getByTestId, getByText} = render(
      <Input
        value={value}
        placeholder={placeholder}
        onChangeText={mockOnChangeText}
        disabled={false}
        onFocus={mockOnFocus}
      />,
    );

    act(() => {
      fireEvent(getByTestId('textInput'), 'focus', {});
    });

    expect(mockOnFocus).toHaveBeenCalled();
  });

  test('should call onBlur', () => {
    const {getByTestId, getByText} = render(
      <Input
        value={value}
        placeholder={placeholder}
        onChangeText={mockOnChangeText}
        disabled={false}
        onBlur={mockOnBlur}
      />,
    );

    act(() => {
      fireEvent(getByTestId('textInput'), 'blur', {});
    });

    expect(mockOnBlur).toHaveBeenCalled();
  });
});
