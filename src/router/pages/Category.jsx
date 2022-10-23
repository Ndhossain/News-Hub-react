import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsItem from '../../components/news/NewsItem';

function Category() {
    const data = useLoaderData();
    return (
        <div>
            <h1>This is Category Page</h1>
            {data.map((news) => (
                <NewsItem key={news._id} news={news} />
            ))}
        </div>
    );
}

export default Category;
