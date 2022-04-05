import React, { HTMLInputTypeAttribute } from "react";

export default function FieldLogin({
    name,
    fieldName,
    type,
    value,
}: {
    name?: string,
    fieldName?: string,
    type: HTMLInputTypeAttribute,
    value?:string
}) {
    return (
        <input className="bg-[#e4e5e6] text-base p-2 mt-3 mb-3 rounded-t-md w-full border-solid border-b-2 border-[#292663" type={type} placeholder={name} name={fieldName} value={value}/>
    );
}
