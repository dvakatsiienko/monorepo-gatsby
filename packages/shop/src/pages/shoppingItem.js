/* Core */
import { Link } from 'gatsby';

/* Components */
import { Button } from '@gatsby-monorepo/shared-ui';

const ShoppingItem = ({ pageContext: { data } }) => {
    if (!data) return null;

    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.content}</p>
            <Button>Purchase</Button>
            <Link to="/">Back to Shop</Link>
        </div>
    );
};

export default ShoppingItem;
