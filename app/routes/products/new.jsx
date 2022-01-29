import { Form, redirect, useActionData } from "remix";

export async function action({ request }) {
    const formData = await request.formData();
    const title = formData.get("title");
    const description = formData.get("description");

    if (!title) {
        return { errors: ["title cannot be empty"] };
    }

    await fetch(`http://localhost:8000/products`, {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    return redirect("/products");
}

export default function NewProduct() {
    const actionData = useActionData();

    return (
        <>
            <h1>New Product</h1>

            <Form action="/products/new" method="post">
                <input type="text" name="title" placeholder="title" />
                <br />
                <input
                    type="text"
                    name="description"
                    placeholder="description"
                />
                <br />
                <ul>
                    {actionData &&
                        actionData.errors.map((error) => <li>{error}</li>)}
                </ul>
                <button type="submit">Save</button>
            </Form>
        </>
    );
}
