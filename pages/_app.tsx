import "../styles/globals.css";
import "../styles/layout.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps) {
    return (
            <Layout>
                <Component {...pageProps} />
            </Layout>
    );
}