'use client'
import React from "react";
import { motion } from "framer-motion";

const BarChart = ({ data }) => {
  const maxValue = Math.max(...data.map((item) => item.total));

  return (
    <div className="flex justify-center mt-5">
      <div className="w-[85%] h-full bg-gray-200 p-3 mt-5 flex items-center relative rounded-lg ">
        <div className="w-6 h-[12rem] flex flex-col justify-evenly">
          <div className="w-[100%] h-full flex flex-col items-center justify-between mb-[2rem] pl-3">
            <div className="text-center">{Math.round(maxValue)}</div>
            <div className="text-center">{Math.round(maxValue / 2)}</div>
            <div className="text-center">0</div>
          </div>
        </div>

        {data.map((item, index) => (
          <motion.div
            key={index}
            className="relative w-16 h-48 flex flex-col items-center justify-end m-2 "
            style={{ flex: `1` }}
            initial={{ opacity: 0, scaleY: 0 }} // Agrega animación inicial
            animate={{ opacity: 1, scaleY: 1 }} // Agrega animación de entrada
            transition={{ duration: 0.5, delay: index * 0.1 }} // Agrega animación de transición
          >
            <div className=" text-xs ">{item.total}</div>
            <div
              className="w-full bg-purple-400 mb-2"
              style={{
                height: `${(item.total / maxValue) * 100}%`,
              }}
            ></div>
            <div className="h-[0.1rem] w-[118%] ml-5 bg-purpleOscuro"></div>
            <div className="text-center">{item.name}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
