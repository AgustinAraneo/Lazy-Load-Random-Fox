import LazyImage from "@/components/RandomFox";
import React, { useState } from "react";
import type { MouseEventHandler } from "react";
import { random } from "lodash"

const randomNumber = () => random(1, 123)
const generateId = () => Math.random().toString(36).substring(2, 9);


const Home = (): JSX.Element => {
  const [images, setImages] = useState<Array<IFoxImageItems>>([]);

  const addNewFox: MouseEventHandler = () => {
    const newImageItem: IFoxImageItems = {
      id: generateId(),
      url: `https://randomfox.ca/images/${randomNumber()}.jpg`,
    };

    setImages([...images, newImageItem]);
  };

  return (
    <div>
      <div className="bg-gray-100">
        <h1 className="pt-10 text-2xl font-bold text-center text-zinc-700">
          Generador de Fotos al Azar
          <br/>
          de 
          <span className="text-indigo-500"> Zorros 🦊</span>
        </h1>
        <div className="flex justify-center mt-10">
          <button
            className="w-auto h-auto p-2 font-medium text-white bg-indigo-500 rounded"
            onClick={addNewFox}
          >
            Add New Fox
          </button>
        </div>
        {images.map(({ id, url }, index) => (
          <div className="p-4" key={id}>
            <LazyImage
              src={url}
              width="320"
              height="auto"
              className="mx-auto bg-gray-300 border-2 border-indigo-500 border-dashed rounded-md"
              onClick={() => {
                console.log("holi!");
              }}
              onLazyLoad={(img) => {
                console.log(`Image #${index + 1} cargada. Nodo:`, img);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
