import { useLoaderData } from "remix";
import { Link, redirect } from "remix";

export async function action({ params }) {
    const { id } = params;

    await fetch(`http://localhost:8000/products/${id}`, {
        method: "DELETE",
    });

    return redirect("/products");
}

export async function loader({ params }) {
    const { id } = params;

    const response = await fetch(`http://localhost:8000/products/${id}`);

    response.headers.set("cache-control", "max-age=604800");

    return response;
}

export default function ProductDetails() {
    const product = useLoaderData();

    return (
        <>
            <Link to="/products">back</Link>
            <h1>Product Details</h1>
            <h4>{product.title}</h4>
            <p>{product.description}</p>
        </>
    );
}
