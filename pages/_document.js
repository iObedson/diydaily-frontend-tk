import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  setGoogleTags() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-J19HVNQ8DX');
        `,
    };
  }

  //

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
          />
          {/* <link rel="stylesheet" href="/static/css/styles.css" /> */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-J19HVNQ8DX"
          ></script>
          <script
            src="https://accounts.google.com/gsi/client"
            async
            defer
          ></script>
          <script dangerouslySetInnerHTML={this.setGoogleTags()} />
          {/* google adsense */}
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2036241181709410"
            crossOrigin="anonymous"
          ></script>
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
                      (adsbygoogle = window.adsbygoogle || []).push({
                      google_ad_client: "ca-pub-2036241181709410",
                      enable_page_level_ads: true
                                            });
                      `,
            }}
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
