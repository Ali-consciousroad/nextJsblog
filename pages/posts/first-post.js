import Link from 'next/link';
import Head from 'next/head';


export default function FirstPost() {
    return (
        <>
            <Head>
                <h1>First Post</h1>;
            </Head>
                <h2>
                    <Link href="/">Back to home</Link>
                </h2>
        </>
    );
}