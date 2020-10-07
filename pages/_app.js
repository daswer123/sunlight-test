import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ваш профиль</title>
      </Head>
      <Component {...pageProps} />

      <style jsx global>
          {`
            *,
            *::after,
            *::before {
              box-sizing: border-box;
            }

            body {
                margin: 0;
                padding: 0;
                font-family: 'Open Sans', sans-serif;
            }

            .user-icon{
              color : green
            }
          `}
      </style>
    </>
  )
}

export default MyApp