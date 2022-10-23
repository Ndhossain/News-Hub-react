import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsItem from '../../components/news/NewsItem';

function Home() {
    const newses = useLoaderData();
    return (
        <div>
            <h1>This is home page</h1>
            {newses.map((news) => (
                <NewsItem key={news._id} news={news} />
            ))}
        </div>
    );
}

export default Home;
