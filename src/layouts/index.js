import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import './index.css';

const Layout = ({ children }) => {
    const data = useStaticQuery(
        graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `,
    );

    const title = data?.site?.siteMetadata?.title ?? 'TEST';

    return (
        <div>
            <Helmet
                title={title}
                meta={[
                    { name: 'description', content: 'Sample' },
                    { name: 'keywords', content: 'sample, something' },
                ]}>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
                />
            </Helmet>
            <Header siteTitle={title} />
            <div
                style={{
                    fontfamily: 'Roboto',
                    margin: '0 auto',
                    maxWidth: 960,
                    padding: '0px 1.0875rem 1.45rem',
                    paddingTop: 0,
                }}>
                {children()}
            </div>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.func,
};

export default Layout;

// export const query = graphql``;
