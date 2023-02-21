import { IconContext } from "react-icons";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import ScrollToTop from "@/components/common/technical/ScrollToTop";
import { GlobalStyles } from "@/styles/global/Global.styled";
import { theme } from "@/styles/global/Theme";
import { store } from "@/setup/redux/store";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ScrollToTop />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <IconContext.Provider value={{ size: "24px" }}>
            {Component.getLayout ? (
              Component.getLayout(<Component {...pageProps} />)
            ) : (
              <Component {...pageProps} />
            )}
          </IconContext.Provider>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
