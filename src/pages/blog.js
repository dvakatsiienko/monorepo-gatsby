import React from 'react';
import { graphql, Link } from 'gatsby';
import { ItemCard, ItemCardWrapper } from '../components/ItemCard';

const BlogPage = ({ data }) => {
    const edges = data.allBlogJson.edges;

    return (
        <div>
            <h1>Blog Page</h1>
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
            <Link to="/">Go back to the shop</Link>
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
