import axios from "axios";

export interface Item {
    category: number
    id: number
    image_id: string
    name: string
    price: string
}

async function stall(stallTime = 3000) {
    await new Promise(resolve => {
        setTimeout(resolve, stallTime);
    });
}

const getItems = async () :Promise<Item[]> => {
    await stall()
    const response = await axios.get<Item[]>('http://localhost:8000/api/v1/menu')
    return response.data
}

export default getItems
