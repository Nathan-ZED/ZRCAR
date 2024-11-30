import React from "react";

export default function Navbar() {
    const navLinks = [
        {
            label: "A propos",
            link: "/about"
        },
        {
            label: "Services",
            link: "/services"
        },
        {
            label: "Contact",
            link: "/contact"
        }
    ]

    return (
        <nav>
            <div className="container flex items-center justify-between py-5 text-white">
                <h1 className="text-3xl font-bold flex items-center gap-2"><span className="text-red-600 text-3xl">ZR</span> CAR</h1>
                <ul className="flex gap-5">
                    {
                        navLinks?.map((link, index) => (
                            <li key={index}>
                                <a href={link.link} className="relative">{link.label}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}