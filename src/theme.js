// theme.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

import { mode } from "@chakra-ui/theme-tools";
import {
  sand,
  sandDark,
  blue,
  blueDark,
  yellow,
  yellowDark,
  amber,
  amberDark,
  gray,
  grayDark,
  mauve,
  mauveDark,
  violet,
  violetDark,
} from "@radix-ui/colors";

const transformRadixToChakraFormat = (scale) => {
  const output = Object.values(scale).reduce((accumulator, currentValue, index) => {
    if (index === 0) {
      accumulator[`100`] = currentValue;
    } else {
      accumulator[`${index + 1}00`] = currentValue;
    }
    return accumulator;
  }, {});
  return output;
};

const radixNeutral = transformRadixToChakraFormat(mauve);
const radixNeutralDark = transformRadixToChakraFormat(mauveDark);
const radixPrimary = transformRadixToChakraFormat(violet);
const radixPrimaryD = transformRadixToChakraFormat(violetDark);
const radixGray = transformRadixToChakraFormat(gray);

// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  config,
  colors: {
    pink: "pink",
    neutral: {
      ...radixNeutral,
    },
    neutralD: {
      ...radixNeutralDark,
    },
    gray: {
      50: "hsl(50 20.0% 99.0%)",
      100: "hsl(60 7.7% 97.5%)",
      200: "hsl(58 6.1% 92.9%)",
      300: "hsl(51 6.0% 77.1%)",
      400: "hsl(50 3.8% 30.6%)",
      500: "hsl(50 4.0% 42.7%)",
      600: "hsl(52 3.1% 48.3%)",
      700: "hsl(58 3.7% 13.1%)",
      800: "hsl(58 3.7% 13.1%)",
      900: "hsl(61 2.0% 8.3%)",
    },
    primary: {
      ...radixPrimary,
    },
    primaryD: {
      ...radixPrimaryD,
    },
    yellowbg: "#FCD13A",
  },
  styles: {
    global: (props) => ({
      html: {
        scrollBehavior: "smooth",
        fontSize: { base: "12px", md: "14px", lg: "16px" },
      },
      body: {
        color: mode("neutral.1200", "neutralD.1200")(props),
        bg: mode("neutral.100", "neutralD.100")(props),
        //fontSize: "1em",
        ".deleted": {
          color: "#ff8383 !important",
          fontStyle: "normal !important",
        },
        ".inserted": {
          color: "#b5f4a5 !important",
          fontStyle: "normal !important",
        },
        MozOsxFontSmoothing: "grayscale",
        WebkitFontSmoothing: "antialiased",
        textRendering: "optimizeLegibility",
      },
    }),
  },
  components: {
    MenuButton: {
      baseStyle: (props) => ({
        _hover: {
          backgroundColor: mode("neutral.400", "neutralD.400")(props),
        },
      }),
    },
    Heading: {
      variants: {
        huge: {
          fontSize: "4rem",
          fontWeight: "800",
          letterSpacing: "-0.025rem",
        },
        h2: {
          fontSize: "2.5rem",
          fontWeight: "600",
          lineHeight: "1.2",
          letterSpacing: "-0.025rem",
        },
        h3: {
          fontSize: "1.5rem",
          fontWeight: "400",
          letterSpacing: "-0.025rem",
          lineHeight: "1.2",
          //lineHeight: "1.625",
        },
      },
    },
    Button: {
      baseStyle: {
        fontWeight: "500",
        rounded: "lg",
        borderColor: mode("neutral.700", "neutralD.700"),
        borderWidth: "0.5px",
        shadow: "base",
      },
    },
    Tag: {
      baseStyle: {
        rounded: "lg",
      },
    },
    textarea: {
      baseStyle: {
        background: "green.300",
      },
    },
    Link: {
      baseStyle: {
        fontWeight: "inherit",
        _hover: {
          textDecoration: "none",
        },
      },
      variants: {
        text: {
          borderBottom: "2px",
          borderColor: "primary.400",
          color: "primaryD.600",
          transition: "all 0.3s",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          borderRadius: "1px",
          _hover: {
            color: "primary.1100",
            backgroundColor: "primary.400",
          },
        },
        gradient: {
          bgGradient: "linear(to-br, blue.400,blue.300)",
          bgClip: "text",
          fontWeight: "500",
          _hover: {
            bgGradient: "linear(to-br, blue.500,blue.300)",
            bgClip: "text",
          },
        },
      },
    },
  },
});

export default theme;
