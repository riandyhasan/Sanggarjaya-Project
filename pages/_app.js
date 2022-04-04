import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import "../styles/globals.css";

const theme = extendTheme({
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Montserrat, sans-serif",
  },
  colors: {
    primary: {
      green: "#077F46",
      orange: "#F18720",
      grey: "#767575",
      black: "#353535"
    },
    secondary: {
      green: "#33665D",
      orange: "#EE873B",
      yellow: "#EFC43B",
      grey: "#C5C5C5",
      black: "#353535"
    },
  },
});

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Global />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;