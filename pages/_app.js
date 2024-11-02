// pages/_app.js
import '../styles/styles.css';
 // Make sure this path is correct (e.g., '../styles/style.css' if renamed)

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
