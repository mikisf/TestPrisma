import { useEffect, useState } from "react"

export default function Home() {

    const [users, setUsers] = useState()
    const [user, setUser] = useState()

    useEffect(() => {
        const setUsersAsync = async () => {
            const response = await fetch(`api/hello`, {
                method: 'GET'
            })
            if (!response.ok) return null;
            setUsers((await response.json()).users)
        }
        setUsersAsync()
    }, [])

    return (
        <div style={{
            display: 'flex',
            padding: '10px'
        }}>
            <div>
                {users?.map(user =>
                    <button key={user.id} onClick={() => setUser(user)}>
                        {user.name}
                    </button>
                )}
            </div>
            <div>
                {
                    user?.name
                }
            </div>
        </div>
    )
}
