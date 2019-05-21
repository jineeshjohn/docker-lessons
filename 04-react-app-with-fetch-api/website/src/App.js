import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:8080/products',
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox!!!!!!@@</h1>
      <h2>Start editing to see some!!!</h2>
      <ul>
        {data.hits.map(product => (
          <li key={product.objectID}>
            <a href={product.url}>{product.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;