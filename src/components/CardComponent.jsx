import React from "react";

function CardComponent({ item }) {
  return (
    <div className="w-[250px] h-[450px] text-sm text-slate-900 rounded-md bg-white dark:text-slate-200 dark:bg-slate-700 overflow-hidden">
      <img
        src={item.thumbnail}
        alt={item.title}
        className="bg-white rounded-t-md object-cover max-w-[250px]"
      />
      <div className="p-[10px] flex flex-col gap-[5px] bg-blue-200 rounded-b-md h-full dark:bg-slate-700">
        <h3 className="font-semibold">{item.title}</h3>
        <p>{item.description}</p>
        <h4 className="p-1 bg-red-500 text-white rounded-md self-start dark:bg-yellow-500 text-center">
          $ {item.price}
        </h4>
      </div>
    </div>
  );
}

export default CardComponent;
