import Document, { Html, Head, Main, NextScript } from 'next/document'

// Custom Document class to override the default Document in Next.js
class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* Place any additional meta tags or scripts here */}
                </Head>
                <body>
                {/* Main content of the application */}
                <Main />
                {/* Next.js scripts */}
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument; // Export the custom Document component as the default export
