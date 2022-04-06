import React from "react";
import Navbar from "./Navbar";
import PopcastIntro from "./PopcastIntro";

export default class Popcast extends React.Component {
    render(): React.ReactNode {
        return(
            <>
            <div className="popcast">
                <Navbar></Navbar>
                <PopcastIntro></PopcastIntro>
            </div>
            </>
        );
    }
}