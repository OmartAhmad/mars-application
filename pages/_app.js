// pages/_app.js
import '../styles/styles.css'; //imported css file


export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
