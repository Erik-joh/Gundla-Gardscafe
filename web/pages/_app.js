import "../styles/globals.css";

import React from "react";
import App from "next/app";

import Layout from "../components/layout";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    let layoutProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    if (Layout.getInitialProps) {
      layoutProps = await Layout.getInitialProps(ctx);
    }

    return { pageProps, layoutProps };
  }

  render() {
    const { Component, pageProps, layoutProps } = this.props;

    return (
      <Layout {...layoutProps}>
        <Component {...pageProps} />
      </Layout>
    );
  }
}
