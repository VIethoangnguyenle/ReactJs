import React from "react";
import { Navbar } from "./Navbar";
import pexels from '../../static/pexels.png';
import { Introduce } from "./Introduce";

export const Title: React.FunctionComponent = () => {
    return (
        <>
            <div className="w-full h-[31rem]">
                <div className="bg-pexel-img bg-cover bg-center w-full h-full">
                    <Navbar></Navbar>
                    <Introduce></Introduce>
                </div>
            </div>
        </>
    );
}