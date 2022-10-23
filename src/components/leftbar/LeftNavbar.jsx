import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function LeftNavbar() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://news-hub-server.vercel.app/categories')
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }, []);

    return (
        <div>
            <h4>Categories ({categories.length})</h4>
            {categories.map((category) => (
                <p key={category.id}>
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                </p>
            ))}
        </div>
    );
}

export default LeftNavbar;
