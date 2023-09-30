import React from 'react';
import "./adminside.css";
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (<div className="sidebar">
        <ul>
            <li><Link to="/admin/user">
                <span className="icon"><i className="fa-solid fa-user-group"/></span>
                <span className="title">User</span>
            </Link></li>
            <li><Link to="/admin/product">
                <span className="icon"><i className="fas fa-shopping-bag"/></span>
                <span className="title">Product</span>
            </Link></li>
            <li><Link to="/admin/orders">
                <span className="icon"><i className="fas fa-cubes" aria-hidden="true"/></span>
                <span className="title">Orders</span>
            </Link></li>
            <li><Link to="/admin/payment">
                <span className="icon"><i className="fa fa-car" aria-hidden="true"/></span>
                <span className="title">payment</span>
            </Link></li>
            <li><Link to="/admin/feedback">
                <span className="icon"><i className="fa fa-archive" aria-hidden="true"/></span>
                <span className="title">Feedbacks</span>
            </Link></li>
        </ul>
    </div>);
}

export default Sidebar;