// @flow 
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

export const Introduce = () => {
    return (
        <div className='w-1/3 h-1/2 m-auto mt-14 space-y-3'>
            <span className='text-white text-4xl font-bold leading-snug'>The best free stock photos, royalty free images & videos shared by creators.</span>
            <div className='flex flex-row justify-center items-center'>
                <input type="search"
                    className="bg-white py-4 px-6 w-[90%] rounded-l-md mt-3 focus:outline-none"
                    placeholder="Search for free photos and videos"
                    aria-label="Search"
                    aria-describedby="button-addon3"
                />
                <button className='w-[10%] bg-white py-4 px-3 mt-3 focus:outline-none rounded-r-md'><FontAwesomeIcon icon={faSearch} size="1x" ></FontAwesomeIcon></button>
            </div>
            <span className='text-white mt-1 text-sm'><b>Suggested: </b> dark  landscape  forest  beach  nature  sunset  more</span>
        </div>
    );
};