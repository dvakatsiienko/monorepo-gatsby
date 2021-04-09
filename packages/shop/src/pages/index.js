/* Core */
import { graphql } from 'gatsby';

/* Components */
import { ItemCard, ItemCardWrapper } from '@gatsby-monorepo/shared-ui';

const IndexPage = ({ data }) => {
    const edges = data.allShoppingJson.edges;

    return (
        <div>
            <h1>Shop: {process.env.GATSBY_GLOBAL_ENV_VAR}</h1>
            <ItemCardWrapper>
                {edges &&
                    edges.map(edge => (
                        <ItemCard
                            key={edge.node.id}
                            data={edge.node}
                            slug="item"
                        />
                    ))}
            </ItemCardWrapper>
            <a
                href={`http://${process.env.GATSBY_BLOG_URL}`}
                rel="noreferrer noopener">
                Go to Blog
            </a>
        </div>
    );
};

export const query = graphql`
    query ShoppingPageQuery {
        allShoppingJson {
            edges {
                node {
                    id
                    title
                }
            }
        }
    }
`;

export default IndexPage;
