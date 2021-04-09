/* Core */
import { graphql } from 'gatsby';

/* Components */
import { ItemCard, ItemCardWrapper } from '@gatsby-monorepo/shared-ui';

const PaperdonPage = ({ data }) => {
    const edges = data.allBlogJson.edges;

    return (
        <div>
            <h1>Paperdon page: {process.env.GATSBY_GLOBAL_ENV_VAR}</h1>
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
            <a href={process.env.EDUSSON_URL} rel="noreferrer noopener">
                Go to Edusson
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

export default PaperdonPage;
