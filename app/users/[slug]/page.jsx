import React from 'react'

const UserDetailsPage = async({params}) => {
    const {slug} = await params
    console.log("dynamik", slug)
    const res = await fetch(`http://localhost:5000/users/${slug}`)
    const result = await res.json()
  return (
    <div>
      <h2>User Details</h2>
      <h3>{result.name || result.username}</h3>
      <h3>{result.email}</h3>
    </div>
  )
}

export default UserDetailsPage
