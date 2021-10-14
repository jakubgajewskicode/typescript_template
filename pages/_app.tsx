import '../styles/globals.css';
import type { AppProps } from 'next/app';

import styled from 'styled-components';

const PageLayout = styled.div`
  box-sizing: border-box;
  height: 100%;
  position: relative;
  width: 85%;
  margin: 0 auto;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </>
  );
}
export default MyApp;
