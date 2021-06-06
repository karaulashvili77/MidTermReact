import React from 'react';

const Book = ({ data, deleteFun }) => {
    return (
        <div
            onClick={() => deleteFun(data.title)}
            className="row list-group-item"
        >
            <span className="book-item">{data.title}</span>
            <span className="book-item">{data.author}</span>
            <span className="book-item">{data.genre}</span>
            <span className="book-item">{data.description}</span>
            <span className="book-item">{data.isbn}</span>
            <span className="book-item">{data.published}</span>
            <span className="book-item">{data.publisher}</span>
            {data.image && (
                <img alt="book" className="book-item" src={data.image} />
            )}
        </div>
    );
};

export default Book;