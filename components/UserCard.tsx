"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { useRouter } from "next/navigation"
import UpDateDialog from "./UpDateDialog"

const UserCard = ({ user }) => {
  const { _id } = user
  const router = useRouter()
  const delectHendle = async(id)=>{
    console.log("delectHendle", id)
    const res = await fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    });
    const result = await res.json()
    console.log(result)
    router.refresh()
    
  }
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          {/* <Badge variant="secondary">Featured</Badge> */}
          <h3>no action</h3>
        </CardAction>
        <CardTitle> name: {user.username || user.name}</CardTitle>
        <CardDescription>Email: {user.email}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Link href={`/users/${user._id}`}>
          <Button className="w-full">View Details</Button>
        </Link>
        <UpDateDialog user={user}></UpDateDialog>
        <Button onClick={() => delectHendle(user._id)} >View Delect</Button>
      </CardFooter>
    </Card>
  )
}

export default UserCard
