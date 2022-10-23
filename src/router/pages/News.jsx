/* eslint-disable camelcase */
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

function News() {
    const news = useLoaderData();
    const { title, details, image_url, category_id, author, total_view } = news;
    return (
        <div className="mb-4">
            <h1>This is New Page</h1>
            <Card className="text-center mt-4">
                <Card.Img variant="top" src={image_url} />

                <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <p className="mb-0">{author.name}</p>
                        <span>Total views: {total_view ?? 0}</span>
                        <p className="mb-0">{author.published_date}</p>
                    </div>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{details}</Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button type="button">View Category</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default News;
