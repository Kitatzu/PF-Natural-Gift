import React from "react";
import "./Paginated.scss"

export default function Paginated ({productsPerPage, products, paginated}) {
    const pageNumber = [];

    for (let i = 0; i < Math.ceil (products/productsPerPage); i++) {
        pageNumber.push(i + 1)
    }

    return (
        <box className="Contenender"> 
            <ul className="pagination">
                {
                    pageNumber?.map(number => (
                        <li className="numbers">
                            <button className="button" onClick={()=>paginated(number)}> {number} </button>
                        </li>

                    )
                )}
            </ul>
            </box>
    )
}