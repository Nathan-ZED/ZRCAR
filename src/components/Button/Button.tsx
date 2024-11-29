import React from 'react';

type ButtonProps = {
    link?: string;
    variant?: "secondary" | "primary" | "danger" | "warning" | "success";
    children: React.ReactNode;
    action?: () => void;
}
export default function Button({ children, link, variant = "primary", action }: ButtonProps) {
    return (
        <button className={`btn btn-${variant}`}>
            {children}
        </button>
    )
}