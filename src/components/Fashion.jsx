import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../css/Fashion.css"

export default function Fashion() {
    let [apidata, setApidata] = useState([]);

    let updateApidata = async () => {
        try {
            let response = await fetch("https://fakestoreapi.com/products");
            let finalData = await response.json();
            setApidata(finalData);
            console.log(finalData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    
    useEffect(() => {
        updateApidata();
    }, []);

    return (
        <section>
            {
                    apidata.map(({ id, title, price, image }) => (
                        <Link className="products" key={id} to={`/product-details/${id}`}>
                            <img src={image} alt={title} />
                            <h1>{title}</h1>
                            <h4>${price}</h4>
                        </Link>
                    ))
                
            }
        </section>
    );
}
