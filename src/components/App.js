import React, {useState, useEffect} from "react";
import "../styles/App.css";
import { tourData } from "../compo/data";
import Place from "../compo/place";

const App = () => {
  const [data, setData] = useState(tourData);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {setTimeout(() => setIsLoading(false), 2000)}, []);

  const handleDelete = (id) => {
    const updatedData = data.filter((place) => place.id !== id);
    setData(updatedData);
  }

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setData(tourData);
    }, 2000);
  }

  
  return isLoading ? <h1 style={{textAlign:'center'}}>Loading....</h1> :(
    <main id="main">
      <div className="empty-list-indicator" style={{display: data.length===0 ? 'block' : 'none'}}>
        <h2>No tours left</h2>
        <button onClick={handleRefresh}>Show again</button>
      </div>
      <div className="tours-data">
        {
          data.map((place) => <Place 
            key={place.id} 
            data={place} 
            handleDelete={handleDelete}
          />)
        }
      </div>
    </main>
  )
}
export default App;
