import { useState } from "react";
import Item from "./models/item";
import { v4 as getId } from "uuid";
import ShoppingList from "./components/ShoppingList";
import ShoppingForm from "./components/ShoppingForm";

function App() {
    const [items, setItems] = useState<Item[]>([]);

    const addItem = (product: string, quantity: number) => {
        const newItem = {
            id: getId(),
            product,
            quantity: 1,
        };
        setItems((items) => [...items, newItem]);
    };

    return (
        <div className="App">
            <ShoppingList items={items} />
            <ShoppingForm onAddItem={addItem} />
        </div>
    );
}

export default App;
