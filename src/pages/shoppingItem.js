import { Link } from 'gatsby';

import Button from '../components/Button';

const ShoppingItem = ({ pathContext: { data } }) => {
    if (!data) {
        return null;
    }

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
