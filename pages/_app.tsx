import '../styles/globals.css';
import type { AppProps } from 'next/app';

import styled from 'styled-components';

const PageLayout = styled.div`
  box-sizing: border-box;
  padding: 20px;
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
