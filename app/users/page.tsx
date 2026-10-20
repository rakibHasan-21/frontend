import UserCard from "@/components/UserCard"

const Users = async() => {
    const res = await fetch(`http://localhost:5000/users`)
    const users = await res.json()
  return (
    <div>
      <h2>{users.length}</h2>
      <div className="grid grid-cols-3 gap-3">
        {
          users.map(user => <UserCard key={user._id} user={user}></UserCard>)
        }
      </div>
    </div>
  )
}

export default Users
