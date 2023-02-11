import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="loading">
          <Main />
          <NextScript />
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=GTM-M832272`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        </body>
      </Html>
    )
  }
}

export default MyDocument
