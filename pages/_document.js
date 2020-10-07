import Document, { Html, Head, Main, NextScript } from 'next/document'
import styled from 'styled-components'


class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <meta charSet="utf-8"/>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
         </body>
      </Html>
    )
  }
}


export default MyDocument