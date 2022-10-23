/* eslint-disable camelcase */
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NewsItem({ news }) {
    const { title, details, image_url, _id, author, total_view } = news;
    return (
        <Card className="text-center mt-4">
            <Card.Header className="d-flex justify-content-between align-items-center">
                <div>
                    <p className="mb-0">{author.name}</p>
                    <p className="mb-0">{author.published_date}</p>
                </div>
                <img
                    style={{ height: '40px' }}
                    className="rounded-circle"
                    src={author.img}
                    alt=""
                />
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length > 250 ? (
                        <>
                            `${details.slice(0, 250)}...$
                            <Link to={`/news/${_id}`}>Read More</Link>`
                        </>
                    ) : (
                        <>
                            {details} <Link to={`/news/${_id}`}>Read More</Link>
                        </>
                    )}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
                <div className="d-flex">
                    <span className="me-2">Share</span>
                    <span>Bookmark</span>
                </div>
                <span>Total views: {total_view ?? 0}</span>
            </Card.Footer>
        </Card>
    );
}

export default NewsItem;
