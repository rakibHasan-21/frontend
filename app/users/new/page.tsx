"use client"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { redirect } from "next/navigation"

const NewPage = () => {
    const hendleAddSubmite = async(e) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const userData = Object.fromEntries(formData.entries())
        console.log(userData)

        const res = await fetch(`http://localhost:5000/users`,{
            method: "POST",
            headers:{
                'Content-Type' : "application/json"
            },
            body: JSON.stringify(userData)
        })
        const result = await res.json()
        console.log("after submite",result)
        if(result.insertedId){
            alert('complate')
            redirect('/users')
        }
    }
  return (
    <div>
      <form onSubmit={hendleAddSubmite}>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
            <Input id="fieldgroup-name" name="name" placeholder="Jordan Lee" />
          </Field>
          <Field>
            <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
            <Input
              id="fieldgroup-email"
              type="email"
              name="email"
              placeholder="name@example.com"
            />
            <FieldDescription>
              We&apos;ll send updates to this address.
            </FieldDescription>
          </Field>
          <Field orientation="horizontal">
            <Button type="reset" variant="outline">
              Reset
            </Button>
            <Button type="submit">add User</Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}

export default NewPage
