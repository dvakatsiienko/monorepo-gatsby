/* Core */
import { graphql } from 'gatsby';

/* Components */
import { ItemCard, ItemCardWrapper } from '@gatsby-monorepo/shared-ui';

const BlogPage = ({ data }) => {
    const edges = data.allBlogJson.edges;

    return (
        <div>
            <h1>Blog: {process.env.GATSBY_GLOBAL_ENV_VAR}</h1>
            <ItemCardWrapper>
                {edges &&
                    edges.map(edge => (
                        <ItemCard
                            key={edge.node.id}
                            data={edge.node}
                            slug="post"
                        />
                    ))}
            </ItemCardWrapper>
            <a
                href={`http://${process.env.GATSBY_SHOP_URL}`}
                rel="noreferrer noopener">
                Go to Shop
            </a>
        </div>
    );
};

export const query = graphql`
    query BlogPostsQuery {
        allBlogJson {
            edges {
                node {
                    id
                    title
                }
            }
        }
    }
`;

export default BlogPage;
