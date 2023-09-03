import axios from 'axios'
export default async function FetchUsers() {
    const {data} = await axios('http://localhost:3000/api/users')
    return (
        <>
            {data?.map((user, index) => (
                <div key={index} >{user.email}</div>
            ))}
        </>
    )
}