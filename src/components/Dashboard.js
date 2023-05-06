import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard(props) {
    return (
        <div>
            <br />
            <Link to="/singleimg" >Upload Single Image</Link>
            <br />
            <br />
            <Link to="/multipleimg" >Upload Multiple Image</Link>
            <br />
            <br />
            <Link to="/multipleimgtogether" >Upload Multiple Image selecting together from file</Link>
            <br />
        </div>
    );
}

export default Dashboard;