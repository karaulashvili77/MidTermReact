import React from 'react';
import { useHistory } from 'react-router';

const NavBar = () => {
    const history = useHistory();
    return (
        <button
            onClick={() => {
                localStorage.removeItem('token');
                history.push('/');
            }}
            className="btn btn-danger navbar"
        >
            Log Out
        </button>
    );
};

export default NavBar;