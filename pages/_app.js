import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import "../styles/style.scss";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Cafecito | Damián Catanzaro</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

MyApp.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object,
};

export default MyApp;
