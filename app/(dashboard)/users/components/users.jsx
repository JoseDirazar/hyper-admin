import axios from 'axios'
export default async function FetchUsers() {
    const { data }= await axios.get('http://localhost:3000/api/users')

    return (
        <>
            {data?.map((user, index) => (
                <div key={index} className='flex items-center pt-2 pb-2 border-t-2 border-slate-500'>
                    <div className='flex justify-center w-60'>{user.email}</div>
                    <div className='flex justify-center w-96'>{user.id}</div>
                    <div className='flex justify-center w-48'>{user.name} {user.last_name}</div>
                    <button onClick='a Cambiar' className='h-10 cursor-pointer ml-10 bg-red-500 rounded-[4px] pl-1 pr-1'>Disable account</button>
                </div>
            ))}
        </>
    )
}