import { Children } from 'react'

export const Each = ({ render, of }) => {
    if (!Array.isArray(of)) {
        return null;
    }

    return Children.toArray(of.map((item, index) => render(item, index)));
};