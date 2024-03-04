import { useRef } from "react";

type ShoppingFormProps = {
    onAddItem: (product: string, quantity: number) => void;
};

function ShoppingForm({ onAddItem }: ShoppingFormProps): JSX.Element {
    const inputRef = useRef<HTMLInputElement>(null);
    const quantityRef = useRef<HTMLInputElement>(null);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const newProduct = inputRef.current!.value;
        const quantity = quantityRef.current!.value;
        onAddItem(newProduct, parseInt(quantity));

        inputRef.current!.value = "";
        quantityRef.current!.value = "1";
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Product Name" ref={inputRef} />
            <input type="number" min={0} max={10} ref={quantityRef} />
            <button>Add Item</button>
        </form>
    );
}

export default ShoppingForm;
