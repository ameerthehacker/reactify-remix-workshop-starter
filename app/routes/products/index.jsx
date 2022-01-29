import { Form, Link, useLoaderData } from "remix";
import { useEffect, useState } from "react";

export async function loader() {
    return await fetch("http://localhost:8000/products");
}

export default function Products() {
    const products = useLoaderData();

    return (
        <>
            <h1>Products</h1>
            <Link to="/products/new">New Product</Link>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            {product.title}
                        </Link>
                        <Form method="post" action={`/products/${product.id}`}>
                            <button type="submit">Delete</button>
                        </Form>
                    </li>
                ))}
            </ul>
        </>
    );
}
