/* Core */
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledAnchor = styled.a`
    display: block;
`;

const BlogItem = ({ pageContext: { data } }) => {
    if (!data) return null;

    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.content}</p>
            <StyledAnchor href={data.href}>Full article</StyledAnchor>
            <Link to="/">Back to Blog</Link>
        </div>
    );
};

export default BlogItem;
