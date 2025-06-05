import { BiLoaderAlt } from "react-icons/bi";

import Navbar from "./components/Navbar";
import { useContext } from "react";
import { ApiContext } from "./utils/contextApi.jsx";
import Card from "./components/Card";
import Form from "./components/Form.jsx";

function App() {

  const {data, loading, error, modal, setModal} = useContext(ApiContext);
  
  return (
    <>
    <Navbar />
    <main>
        {loading && !error && <BiLoaderAlt className="text-4xl flex justify-self-center items-center animate-spin min-h-screen"/>}
        {error && <div className="text-xl flex justify-self-center items-center min-h-screen" >{error}</div>}
        <div className="grid grid-cols-6 gap-2 mt-5">

          {data.length > 0 && data.map((item,idx)=>{
            return <Card key={idx} image={item.profileImg} firstName={item.firstName} lastName={item.lastName} role={item.role} linkedin={item.linkedin} twitter={item.twitter} />
          })}
        </div>

    </main>
    {modal && <div className="absolute  w-[100%] h-[100%] backdrop-blur-sm flex flex-col justify-center items-center  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Form setModal={setModal} />
    </div>}
    </>
  )

 
    
  
}

export default App;
