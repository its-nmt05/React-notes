import React from "react"
import { useState, useEffect } from "react"
import { useLoaderData } from "react-router-dom"

function Github() {
  const data = useLoaderData()
  //   const [data, setData] = useState("")
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/its-nmt05")
  //       .then((res) => res.json())
  //       .then((data) => setData(data))
  //   }, [])
  return (
    <div className="flex space-x-4 m-4 p-4 text-2xl bg-gray-300">
      <img className="w-40 h-40" src={data.avatar_url} alt="profile" />
      <pre className="flex items-center justify-center">
        Name: {data.name}
        <br />
        Bio: {data.bio}
        <br />
        Github followers: {data.followers}
        <br />
        Repos: {data.public_repos}
      </pre>
    </div>
  )
}

export default Github

// not recommended practice, make a separate file
export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/its-nmt05")
  return res.json()
}
