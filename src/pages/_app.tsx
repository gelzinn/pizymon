import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { GlobalStyles } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  const [isSSR, setIsSSR] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <>
      {!isSSR && (
        <>
          <GlobalStyles />
          <Component
            {...pageProps}
            loggedStatus={isLogged}
            handleLoggedChange={setIsLogged}
          />
        </>
      )}
    </>
  );
}

export default MyApp;
