import React from "react";

const BarChart = ({ data }) => {
  const maxValue = Math.max(...data.map((item) => item.total));

  return (
    <div className="flex justify-center">
      <div className="w-[80%] h-64 bg-gray-200 p-4 flex items-center relative">
        <div className="w-6 h-[90%] flex flex-col justify-between bg-green-500">
          <div className="w-[100%] h-full flex flex-col items-center justify-between">
            <div className="text-center">{maxValue}</div>
            <div className="text-center">{Math.round(maxValue / 2)}</div>
            <div className="text-center">0</div>
          </div>
        </div>

        {data.map((item, index) => (
          <div
            key={index}
            className="relative w-16 h-48 flex flex-col items-center justify-end"
            style={{ flex: `1` }}
          >
            <div
              className="w-full bg-blue-500 mb-2"
              style={{
                height: `${(item.total / maxValue) * 100}%`,
              }}
            ></div>
            <div className="text-center">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
