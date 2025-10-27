import React from "react";
export default function Key({ label, onClick }) {
                console.log({label})

    return (
        <div>
            <button onClick={() => { onClick(label) }} className="key">{label}</button>
        </div>
    )
}