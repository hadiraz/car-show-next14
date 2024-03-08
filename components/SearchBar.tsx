"use client";
import React, { useState } from "react";
import { SearchManufacture } from "./";
import Image from "next/image";
import { useRouter } from "next/navigation";
const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};

const SearchBar = () => {
  const [manufacture, setManufacture] = useState("");
  const [model, setModel] = useState("");
  const Router = useRouter()
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(manufacture === '' && model === ''){
      return alert("enter the data")
    }
    updateSearchParams(model.toLocaleLowerCase() , manufacture.toLocaleLowerCase())
  };

  const updateSearchParams = (model : string , manufacturer  :string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if(model){
      searchParams.set('model' , model);
    }else {
      searchParams.delete('model')
    }
    if(manufacturer){
      searchParams.set('manufacturer' , manufacturer);
    }else {
      searchParams.delete('manufacturer')
    }
    const newPathName = `${window.location.pathname}?${searchParams.toString()}`
    Router.push(newPathName , {scroll : false})
  }
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <div className="searchbar__item">
        <SearchManufacture
          manufacturer={manufacture}
          setManufacturer={setManufacture}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4 "
          alt="car model"
        />
        <input type="text" value={model} name="model" onChange={(e)=>setModel(e.target.value)} placeholder="tiguan" className="searchbar__input"/>
        <SearchButton otherClasses="sm:hidden" />
      </div>
        <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
