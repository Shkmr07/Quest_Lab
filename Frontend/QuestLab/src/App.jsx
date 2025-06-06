import { BiLoaderAlt } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import { useContext } from "react";
import { ApiContext } from "./utils/contextApi.jsx";
import Card from "./components/Card";
import Form from "./components/Form.jsx";

function App() {
  const { data, loading, error, modal, setModal } = useContext(ApiContext);

  return (
    <>
      <Navbar />
      <main>
        {loading && !error && (
          <BiLoaderAlt className="text-4xl flex justify-self-center items-center animate-spin min-h-screen" />
        )}
        {error && (
          <div className="text-xl flex justify-self-center items-center min-h-screen">
            {error}
          </div>
        )}
        <div className="flex flex-wrap justify-center  gap-2 mt-5">
          {data.length > 0 &&
            data.map((item, idx) => {
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card
                    key={idx}
                    image={item.image}
                    firstName={item.firstName}
                    lastName={item.lastName}
                    role={item.role}
                    linkedin={item.linkedin}
                    twitter={item.twitter}
                  />
                </motion.div>
              );
            })}
        </div>
      </main>
      {modal && (
        <div className="absolute  min-w-screen min-h-screen backdrop-blur-sm flex flex-col justify-center items-center  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Form setModal={setModal} />
          <IoMdClose
            onClick={() => setModal(false)}
            className="absolute top-10 right-10 text-3xl hover:rotate-180 transition transform duration-500 ease-in-out text-slate-900"
          />
        </div>
      )}
    </>
  );
}

export default App;
