// Top-level React component that wraps all the pages in our app.
// Component keep state when navigating between pages or used to add global styles 
// Load global CSS to our application

import '../styles/global.css';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}