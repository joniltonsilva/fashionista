import React from 'react'
import './styles.css';
export default function Promotion({discount}) {
    return (
        <div>
            <span className="product__promotion">{discount}</span>
        </div>
    )
}
