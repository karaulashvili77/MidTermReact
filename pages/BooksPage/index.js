import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import book from '../../components/book';
import NavBar from '../../components/navBar';

const Books = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    let [books, setBooks] = useState();

    const [filteredBooks, setFilteredBooks] = useState();

    const [dropdown, setDropdown] = useState(false);

    const [sortDropdowns, setSortDropdown] = useState(false);

    const inputRef = useRef();

    useEffect(() => {
        fetch('https://fakerapi.it/api/v1/books?_quantity=1', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then(res => res.json())
            .then(({ data }) => {
                setBooks(data);
                setFilteredBooks(data.slice(0, 10));
            });
    }, []);

    const filterQuantity = quantity => {
        const booksToFilter = [...books];
        setFilteredBooks(booksToFilter.slice(0, quantity));
        setDropdown(false);
    };

    const sortByName = ascending => {
        const booksToFilter = [...filteredBooks];
        if (ascending) {
            setFilteredBooks(
                booksToFilter.sort(function (a, b) {
                    var A = a.name.toUpperCase();
                    var B = b.name.toUpperCase();
                    return A < B ? -1 : A > B ? 1 : 0;
                })
            );
        } else {
            setFilteredBooks(
                booksToFilter.sort(function (a, b) {
                    var A = a.name.toUpperCase();
                    var B = b.name.toUpperCase();
                    return A > B ? -1 : A < B ? 1 : 0;
                })
            );
        }
        setSortDropdown(false);
    };

    const filterByEmail = () => {
        const booksToFilter = [...filteredBooks];
        const Email = inputRef.current.value;

        setFilteredBooks(
            booksToFilter.filter(item => item.book === book)
        );
    };

    const deleteFunction = email => {
        const booksToFilter = [...filteredBooks];
        setFilteredBooks(
            booksToFilter.filter(item => item.email !== email)
        );
    };

    const onSubmit = data => {
        setFilteredBooks([...filteredBooks, data]);
    };
    return (
        <>
            <div className="add-form">
                <NavBar />

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="log-in-form col"
                >
                    <div className="input-group mb-3">
                        <span
                            className="input-group-text"
                            id="inputGroup-sizing-default"
                        >
                            Title
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            {...register('title', { required: true })}
                        />
                    </div>
                    {errors.title && (
                        <span className="text-danger form-text">
                            {errors.name.type === 'required' &&
                                'Title is required'}
                        </span>
                    )}
                    <div className="input-group mb-3">
                        <span
                            className="input-group-text"
                            id="inputGroup-sizing-default"
                        >
                            Author
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            {...register('author', { required: true })}
                        />
                    </div>
                    {errors.author && (
                        <span className="text-danger form-text">
                            {errors.author.type === 'required' &&
                                'Author is required'}
                        </span>
                    )}


                    <div className="input-group mb-3">
                        <span
                            className="input-group-text"
                            id="inputGroup-sizing-default"
                        >
                            Genre
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            {...register('genre', { required: true })}
                        />
                    </div>
                    {errors.genre && (
                        <span className="text-danger form-text">
                            {errors.genre.type === 'required' &&
                                'Genre is required'}
                        </span>
                    )}

                    <div className="input-group mb-3">
                        <span
                            className="input-group-text"
                            id="inputGroup-sizing-default"
                        >
                            Description
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            {...register('description', { required: true })}
                        />
                    </div>
                    {errors.description && (
                        <span className="text-danger form-text">
                            {errors.description.type === 'required' &&
                                'Description is required'}
                        </span>
                    )}
 
                    
                    <div className="input-group mb-3">
                        <span
                            className="input-group-text"
                            id="inputGroup-sizing-default"
                        >
                            Isbn
                        </span>
                        <input
                            type="number"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            {...register('isbn', { required: true })}
                        />
                    </div>
                    {errors.isbn && (
                        <span className="text-danger form-text">
                            {errors.isbn.type === 'required' &&
                                'Isbn is required'}
                        </span>
                    )}

                    <div className="input-group mb-3">
                        <span
                            className="input-group-text"
                            id="inputGroup-sizing-default"
                        >
                            Published
                        </span>
                        <input
                            type="date"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            {...register('published', { required: true })}
                        />
                    </div>
                    {errors.published && (
                        <span className="text-danger form-text">
                            {errors.published.type === 'required' &&
                                'Published is required'}
                        </span>
                    )}


                    <div className="input-group mb-3">
                        <span
                            className="input-group-text"
                            id="inputGroup-sizing-default"
                        >
                            Publisher
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            {...register('publisher', { required: true })}
                        />
                    </div>
                    {errors.publisher && (
                        <span className="text-danger form-text">
                            {errors.publisher.type === 'required' &&
                                'Publisher is required'}
                        </span>
                    )}
                    

                    <div>
                        <button type="submit" className="btn btn-primary">
                            Add New Book
                        </button>
                    </div>
                </form>
            </div>
            <div className="container book">
                <div className="book-filter">
                    <div className="dropdown">
                        <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="false"
                            onClick={() => setSortDropdown(!sortDropdowns)}
                        >
                            Sort books by name
                        </button>
                        {sortDropdowns && (
                            <div className="dropdown-menu">
                                <span
                                    onClick={() => sortByName(true)}
                                    className="dropdown-item"
                                >
                                    Ascending
                                </span>
                                <span
                                    onClick={() => sortByName(false)}
                                    className="dropdown-item"
                                >
                                    Descending
                                </span>
                            </div>
                        )}
                    </div>
                    <div className="dropdown">
                        <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="false"
                            onClick={() => setDropdown(!dropdown)}
                        >
                            Books quantity
                        </button>
                        {dropdown && (
                            <div className="dropdown-menu">
                                <span
                                    onClick={() => filterQuantity(10)}
                                    className="dropdown-item"
                                >
                                    10
                                </span>
                                <span
                                    onClick={() => filterQuantity(20)}
                                    className="dropdown-item"
                                >
                                    20
                                </span>
                            </div>
                        )}
                    </div>
                    <form
                        onSubmit={em => {
                            em.preventDefault();
                            filterByEmail();
                        }}
                        className="input-group mb-3"
                    >
                        <input
                            ref={inputRef}
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="filter by Email"
                        />
                    </form>
                </div>
                <div className="row list-group-item">
                    <span className="book-item">title</span>
                    <span className="book-item">Author</span>
                    <span className="book-item">Genre</span>
                    <span className="book-item">Description</span>
                    <span className="book-item">Isbn</span>
                    <span className="book-item">Published</span>
                    <span className="book-item">Publisher</span>
                    <span className="book-item">Image</span>
                </div>
                {filteredBooks &&
                    filteredBooks.map((item, index) => (
                        <Book
                            key={item.name + index}
                            data={item}
                            deleteFun={deleteFunction}
                        />
                    ))}
            </div>
        </>
    );
};

Books.propTypes = {
    quantity: PropTypes.number,
};

export default Books;