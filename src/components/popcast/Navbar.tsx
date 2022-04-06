import React from "react";
import logo from "../../static/logo.svg"
import paypal from "../../static/paypal.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCartShopping, faFlorinSign } from "@fortawesome/free-solid-svg-icons";
export default class Navbar extends React.Component {

    render(): React.ReactNode {
        return (
            <>
                <nav className="bg-[#080e1a] border-gray-200 rounded dark:bg-gray-800 p-5">
                    <div className="container flex flex-wrap justify-between items-center mx-auto px-16">
                       <img className="border border-solid border-white border-1 p-2 rounded-lg" src={logo}></img>
                        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium justify-center items-center">
                                <li>
                                    <a href="#" className="navbar-menu-item">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="navbar-menu-item">Podcast</a>
                                </li>
                                <li>
                                    <a href="#" className="navbar-menu-item">Host</a>
                                </li>
                                <li>
                                    <a href="#" className="navbar-menu-item">Blog</a>
                                </li>
                                <li>
                                    <a href="#" className="navbar-menu-item">Contact</a>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faSearch} color="white" size="1x"></FontAwesomeIcon>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faFlorinSign} color="white" size="1x"></FontAwesomeIcon>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCartShopping} color="white" size="1x"></FontAwesomeIcon>
                                </li>
                                <li>
                                    <button className="bg-blue-600 rounded-md py-3 px-6 text-lg font-sans font-medium text-white flex flex-row">
                                        <i className="fa fa-paypal mt-1.5" aria-hidden="false"></i>
                                        <span className="ml-1">Donate</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );

    }
}