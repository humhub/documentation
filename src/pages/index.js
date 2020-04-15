import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
    {
        title: <>About HumHub</>,
        imageUrl: 'img/undraw_browsing.svg',
        href:'/docs/about/humhub',
        description: (
            <>
                Get to know the HumHub platform. This guide serves as brief overview of
                the platform and its basic concepts. Find out whether or not HumHub fits your needs.
            </>
        ),
    },
    {
        title: <>Installation and Administration</>,
        imageUrl: 'img/undraw_To_the_stars.svg',
        href:'/docs/admin/requirements',
        description: (
            <>
                Make your first steps by setting up HumHub. Although the installation of HumHub is quite simple,
                it offers many configuration options to meet the needs of your network.
            </>
        ),
    },
    {
        title: <>Theming Guide</>,
        imageUrl: 'img/undraw_flowers.svg',
        href:'/docs/theme/overview',
        description: (
            <>
                HumHub brings the tools to customize the look and feel of your platform. Learn more about the
                available theming techniques of HumHub.
            </>
        ),
    },
    {
        title: <>Development Guide</>,
        imageUrl: 'img/undraw_code_review.svg',
        href:'/docs/develop/overview',
        description: (
            <>
                You want to add custom features or change the behavior of your HumHub installation? Then check out the
                development guide for all information around the development of HumHub modules.
            </>
        ),
    },
    {
        title: <>Release Notes</>,
        imageUrl: 'img/undraw_product_tour.svg',
        href:'/docs/about/releasenotes/release_notes',
        description: (
            <>
                You want to learn more about upcoming features and releases? Take a look at the
                release notes.
            </>
        ),
    },
    {
        title: <>Professional Edition</>,
        imageUrl: 'img/undraw_reviewed_docs.svg',
        href:'/docs/professional/installation',
        description: (
            <>
                Learn more about the extended features of the enterprise edition and how to use them.
            </>
        ),
    },
    {
        title: <>Community</>,
        imageUrl: 'img/undraw_friends_online.svg',
        href:'/docs/develop/professional',
        description: (
            <>
                Any further questions? Be part of our ever growing community, ask questions, provide support or
                share your ideas with other HumHub users around the world.
            </>
        ),
    },
   /* {
        title: <>Modules and APIs</>,
        imageUrl: 'img/undraw_hologram.svg',
        href:'/docs/develop/professional',
        description: (
            <>
                Some HumHub Modules provide additional features in order to connect your HumHub platform with external services or vice versa.
            </>
        ),
    },
    {
        title: <>User Guide</>,
        imageUrl: 'img/undraw_browsing.svg',
        href:'/docs/develop/user',
        description: (
            <>
                Check out the user guide in order to learn everything about how to use the HumHub platform from a user perspective.
            </>
        ),
    },*/


];

function Feature({imageUrl, title, href, description}) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={classnames('col col--4', styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <a href={href}><img className={styles.featureImage} src={imgUrl} alt={title}/></a>
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout
            title={siteConfig.title}
            description="Description will go into a meta tag in <head />">
            <header className={classnames('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <img src="/img/undraw_File_bundle.svg" className={classnames('title-image', styles.titleImage)}  />
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={classnames(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted,
                            )}
                            to={useBaseUrl('/docs/about/humhub')}>
                            Get Started
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                {features && features.length && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    );
}

export default Home;
