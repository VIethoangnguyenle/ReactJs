import React from "react";

export default function Card({
    image,
    imageAlt,
    title,
    description,
    tags,
}: {
    image?: string;
    imageAlt?: string;
    title?: string;
    description?: string;
    tags?: string[]
}) {
    return(
        <div className="max-w-md rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 ease-out transform hover:scale-105">
            {image && <img className="w-full" src={image} alt={imageAlt}></img>}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 cursor-pointer hover:bg-slate-400  translate-all duration-500">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>

            <div className="px-6 py-5">
                {tags?.map((tag) => (
                    <span
                    key={tag}
                    className='inline-block cursor-pointer select-none hover:bg-gray-300 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
                        {tag}
                    </span>
                ))}

            </div>
        </div>
    );
}