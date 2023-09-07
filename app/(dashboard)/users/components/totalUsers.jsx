
export default function TotalUsers({data}) {
    
    const totalUsers = data.reduce((acc) => acc + 1, 0)
  
    

    return (
        <div className="flex items-center justify-center bg-purpleNav w-[100%] h-[100%]">
           <div className=' text-3xl'>Total users: {totalUsers}</div>
        </div>
    )
}