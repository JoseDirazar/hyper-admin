
export default function TotalUsers({data}) {
    
    const totalUsers = data.reduce((acc) => acc + 1, 0)

    return (
        <>
           <div className='mt-16 text-[30px]'>Total users:</div>
           <div className='flex justify-center text-[60px]'>{totalUsers}</div>
        </>
    )
}