/* eslint-disable array-callback-return */
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

interface NavbarField {
    name?: string,
    type?: string
}
export const Navbar: React.FunctionComponent = () => {
    const bars: NavbarField[] = [{ name: "Explore", type: "dropdown" }, { name: "License", type: "string" }, { name: "Upload", type: "string" }];
    const dropdownItems: string[] = ["Discover Photos", "Popular Searches", "Leaderboard", "Challenges", "Free Videos", "Pexels Blog"];

    return (
        <div className='flex flex-row justify-between items-center bg-inherit p-4 text-white'>
            <div className='flex flex-row justify-center items-center'>
                <FontAwesomeIcon className='' icon={faCoffee} size="3x" color='#267799' />
                <span className='text-lg text-white px-4 font-semibold'>Pexels</span>
            </div>

            <div className='flex flex-row justify-center items-center'>
                {bars.map((item) => {
                    if (item.type === "dropdown") {
                        return (
                            <div>
                                <button id="dropdownDefault"
                                    data-dropdown-toggle="dropdown"
                                    className='px-3 focus:outline-none hover:text-slate-300 block'>
                                    {item.name}
                                </button>
                                <div id='dropdownItem' x-show = "open" className='hidden z-10 w-44 bg-white rounded divide-y divide-blue-50 shadow absolute mt-1' >
                                    <ul aria-labelledby="dropdownDefault">
                                        {dropdownItems.map((label) => (
                                            <li>
                                                <a className='block py-2 px-4 text-black' href="#/">{label}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    }
                    return <a className='px-3 hover:text-slate-300' href="/">{item.name}</a>
                })}
                <button className='leading-3 p-3 font-black tracking-[0.15rem] text-2xl text-center hover:text-slate-300'>...</button>
                <button className='bg-green-600 px-7 py-2 font-semibold ml-3 rounded-md'>Join</button>
            </div>
        </div>
    );
};