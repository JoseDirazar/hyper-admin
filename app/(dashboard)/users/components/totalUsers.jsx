
export default function TotalUsers({data}) {
    
    const totalUsers = data.reduce((acc) => acc + 1, 0)
  
    

    return (
        <div className="">
           <div className=' text-3xl'>Total users: {totalUsers}</div>
        </div>
    )
}