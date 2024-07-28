import {extendTheme} from 'native-base';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const commonColors = {
  white: '#FFFFFF',
  black: '#000000',
};

export const themeColors = {
  ...commonColors,
  themeBlue: '#1877F2',
  primaryBase: '#E7F1FE',
  blue100: '#CFE2FC',

  lightGrey: '#F3F4F7',
  grey10: '#f3f4f7',
  grey100: '#A0A0A7',
  grey200: '#A0A0A7',
  grey300: '#71717A',
  grey500: '#6B7280',

  blackBase: '#18181A',
  black800: '#0A0A0B',
  black900: '#050505',

  redBase: '#9C2020',

  greenBase: '#167625',
};

const customTheme = extendTheme({
  components: {
    FormControl: {
      baseStyle: {
        w: '100%',
        maxW: '100%',
      },
    },
    Input: {
      baseStyle: {
        h: hp(4.5),
        width: '100%',
        borderWidth: 1,
        borderRadius: 5,
        color: themeColors.black800,
        borderColor: themeColors.grey100,
        _focus: {
          borderColor: themeColors.grey100,
          bg: 'red.500',
          _android: {
            selectionColor: 'unset',
          },
        },
        _invalid: {
          borderColor: themeColors.redBase,
        },
        _disabled: {
          opacity: 0.6,
          borderColor: themeColors.grey100,
        },
        _placeholder: {
          color: themeColors.grey100,
        },
      },
    },
    Text: {
      baseStyle: {
        fontFamily: 'Poppins-Regular',
      },
    },
    Button: {
      baseStyle: {
        rounded: 'sm',
      },
      sizes: {
        lg: {
          px: 4,
          py: 2,
        },
        md: {
          px: 3,
          py: 2,
        },
        sm: {
          px: 3,
          py: 1.5,
        },
      },
      variants: {
        solid: (props: any) => {
          return {
            bg: themeColors.themeBlue,
            _pressed: {
              bg: themeColors.themeBlue,
            },
          };
        },
        outline: (props: any) => {
          return {
            bg: themeColors.white,
            borderColor: themeColors.themeBlue,
            _text: {
              color: themeColors.themeBlue,
            },
            _pressed: {
              bg: themeColors.themeBlue,
              _text: {
                color: themeColors.white,
              },
            },
          };
        },
        light: (props: any) => {
          return {
            bg: themeColors.primaryBase,
            borderColor: themeColors.primaryBase,
            _text: {
              color: themeColors.themeBlue,
            },
            _pressed: {
              bg: themeColors.primaryBase,
              _text: {
                color: themeColors.white,
              },
            },
          };
        },
      },
      defaultProps: {
        size: 'sm',
        variant: 'solid',
      },
    },
    Checkbox: {
      baseStyle: {
        _checked: {
          bg: themeColors.themeBlue,
          borderColor: themeColors.themeBlue,
        },
      },
    },
  },
});

export default customTheme;
