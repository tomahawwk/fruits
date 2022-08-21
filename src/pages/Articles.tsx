import React from 'react';
import { Page, PageHead, Section } from '../components/blocks';

const Articles = () => {
    return (
        <Page>
            <PageHead
                title="Articles"
                subtitle="about us"
                back={{ name: "Catalog", url: "/catalog" }}
                next={{ name: "Home", url: "/" }}
                background="./images/mobile-backgrounds/1.jpg"
            />
            <Section grey>
                Articles
            </Section>
        </Page>
    )
}

export default Articles;