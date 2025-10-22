import api from "../services/api.ts";

function Home() {

    api.get("/movies").then(res => console.log(res.data));

  return (
    <>
        <h1>Home Page</h1> 
        
    </>
  )
}

export default Home;