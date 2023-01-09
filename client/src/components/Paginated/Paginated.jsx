import React from "react";

export default function Paginated ({productsPerPage, products, paginated}) {
    const pageNumber = [];

    for (let i = 0; i < Math.ceil (products/productsPerPage); i++) {
        pageNumber.push(i + 1)
    }

    return (
        <nav>
            <ul>
                {
                    pageNumber?.map(number => (
                        <li>
                            <button onClick={()=>paginated(number)}> {number} </button>
                        </li>

                    )
                )}
            </ul>
        </nav>
    )
}