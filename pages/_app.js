// Top-level React component that wraps all the pages in our app.
// Component keep state when navigating between pages or used to add global styles 
// Load global CSS to our application

import '../styles/global.css';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}