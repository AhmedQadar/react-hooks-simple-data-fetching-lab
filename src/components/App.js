// create your App component here
import React from "react";
import { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                setLoading(false); 
                setData(data.message);
            });

    }, []);

    return (
        <div className="App">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <img src={data} alt="A Random Dog" />
            )}
        </div>
    )
}

export default App;
