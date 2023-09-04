import React from 'react';

const BarChart = ({ data }) => {
  const maxValue = Math.max(...data.map(item => item.total));

  return (
    <div className="w-full h-64 bg-gray-200 p-4 flex items-center">
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
  );
};

export default BarChart;
