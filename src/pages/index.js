import React, { Fragment } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { theme } from 'common/theme/webAppCreative';
import ResetCSS from 'common/assets/css/style';
import Banner from 'containers/WebAppCreative/Banner';
import Navbar from 'containers/WebAppCreative/Navbar';
import HowItWorks from 'containers/WebAppCreative/HowItWorks';
import AnalyticsTool from 'containers/WebAppCreative/AnalyticsTool';
import Dashboard from 'containers/WebAppCreative/Dashboard';
import Pricing from 'containers/WebAppCreative/Pricing';
import Faq from 'containers/WebAppCreative/Faq';
import CallToAction from 'containers/WebAppCreative/CallToAction';
import Footer from 'containers/WebAppCreative/Footer';
import { GlobalStyle, ContentWrapper, CombinedSection } from 'containers/WebAppCreative/webAppCreative.style';
import 'animate.css';

const webAppCreative = () => {
    return (
        <ThemeProvider theme={theme}>
            <Fragment>
                <Head>
                    <title>Payments - Pagamentos Mpesa para Shopify</title>
                    <meta name="Description" content="Integre pagamentos Mpesa na sua loja Shopify"/>
                    <meta name="theme-color" content="#4fc28c"/>
                    <link rel="icon" type="image/x-icon" href="favicon.ico"></link>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Inter:wght@400;500;700;800&display=swap"
                    />
                </Head>

                <ResetCSS/>
                <GlobalStyle/>

                <ContentWrapper>
                    <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
                        <DrawerProvider>
                            <Navbar />
                        </DrawerProvider>
                    </Sticky>
                    <Banner />
                    <HowItWorks />
                    <AnalyticsTool />
                    <Dashboard />
                    <CombinedSection>
                        <Pricing />
                    </CombinedSection>
                    <Faq />
                    <CallToAction />
                    <Footer />
                </ContentWrapper>
            </Fragment>
        </ThemeProvider>
    );
};
export default webAppCreative;
