import React from "react";
import Title from "../../static/hero-title.png";
import Banner from "../../static/hero-banner.png";

export default class PopcastIntro extends React.Component {
    render(): React.ReactNode {
        return (
            <>
                <div className="flex flex-row divide-x-0 justify-center items-center p-16 w-full bg-blue-900 px-[20rem]">
                    <div className="w-1/2">
                        <img className="h-[20rem] mb-8" src={Title} alt="title" />
                        <span className="text-white mt-6 tracking-wider leading-loose font-medium">Lorem ipsum dolor sit amet consectetur adipiscing elit tincidunt in felis malesuada mollis purus id sit in aliquet lectus eget morbi dui felis.</span>
                    </div>
                    <div className="w-1/2">
                        <img className="rounded-[8rem] h-[40rem]" src={Banner} alt="banner" />
                    </div>
                </div>
            </>
        );
    }
}