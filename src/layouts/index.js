/* Core */
import { graphql, useStaticQuery } from 'gatsby';

/* Components */
import { PrimaryLayout } from '../../packages/shared-ui';

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

    return <PrimaryLayout children={children} data={data} />;
};

export default Layout;
