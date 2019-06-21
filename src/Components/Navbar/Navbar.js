import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {


    render() {
        return (
            <div>
                <Link to='/'><button>Home</button></Link>
                <Link to='/dashboard'><button>Dashboard</button></Link>
                <Link to='/login'><button>Log In</button></Link>
            </div>
        )
    }
}

export default Navbar;