import axios from 'axios'
export default async function TotalUsers() {
    const { data }= await axios.get(process.env.NEXT_PUBLIC_URL + '/api/users')

    const totalUsers = data.reduce((acc) => acc + 1, 0)


    return (
        <>
           <div className='mt-16 text-[30px]'>Total users:</div>
           <div className='flex justify-center text-[60px]'>{totalUsers}</div>
        </>
    )
}