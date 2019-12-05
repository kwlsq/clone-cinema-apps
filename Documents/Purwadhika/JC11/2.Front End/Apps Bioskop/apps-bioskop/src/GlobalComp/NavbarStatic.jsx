import React, { Component } from 'react';
import { FormGroup, Input } from "reactstrap";
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
import './NavbarStatic.css';

class Header extends Component {
    state = {}
    render() {
        return (
            <div className="header">
                <div className="top-ads-cont" >
                    <div className="top-ads">
                        <img src="https://tpc.googlesyndication.com/simgad/15323312126400135546?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qmLSwFobSu6dGGe0DZVUrzLq1cdxg" alt="iklan" />
                    </div>
                </div>
                <div className="navbar-static-cont">
                    <div className="home-cont">
                        <div className="logo-home">
                            <Link to="/"><img src="https://21cineplex.com//theme/v5/assets/img/icons/home@2x.png" alt="logo-home" /></Link>
                        </div>
                        <div className="logo-cineplex">
                        <Link to="/"><img src="https://21cineplex.com//theme/v5/assets/img/logo.png" alt="logo" /></Link>
                        </div>
                    </div>
                    <div className="search-bar">
                        <FormGroup className="form-group">
                            <div className="search-icon">
                                <SearchIcon  />
                            </div>
                            <div className="search-bar-comp">
                            <Input
                                type="search"
                                name="search"
                                id="exampleSearch"
                                placeholder="Search theater, movies..."
                            ></Input>
                            </div>
                        </FormGroup>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;