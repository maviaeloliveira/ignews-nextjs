import Document, { Html, Head, Main, NextScript } from "../../node_modules/next/document"

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,700&family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
                
                    <link rel="shrtcut icon" href="/favicon.png" type="image/png"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}