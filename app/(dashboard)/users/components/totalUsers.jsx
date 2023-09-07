
export default function TotalUsers({data}) {
    
    const totalUsers = data.reduce((acc) => acc + 1, 0)
  
    

    return (
        <div className="">
           <div className='mt-16 text-4xl'>Total users:</div>
           <div className='flex justify-center text-xl'>{totalUsers}</div>
        </div>
    )
}