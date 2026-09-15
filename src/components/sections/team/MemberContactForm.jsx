import { useState } from "react";
import Button from "@/components/ui/Button";

const initialState = {fname:"",lname:"",phone:"",email:"",message:""}

const MemberContactForm = () => {
    const [values, setValues] = useState(initialState);
    const [status, setstatus] = useState(null);

    function handleChange(e) {
        setValues((v) => ({...v,[e.target.name]:e.target.value}))
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(!values.fname || !values.lname || !values.phone || !values.email) {
            setstatus("error");
            return;
        }
            setstatus("success");
            setValues(initialState);
    }
  return (
    <>
    <form onSubmit={handleSubmit} onValidation className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
            <input 
            name="fname"
            value={values.fname}
            onChange={handleChange}
            placeholder="First Name"
            required
            className="w-full rounded-full border border-divider bg-transparent px-4 py-3 text-sm text-primary placeholder:text-body focus:border-accent focus:outline-none"
            />

            <input 
            name="lname"
            value={values.lname}
            onChange={handleChange}
            placeholder="Last Name"
            required
            className="w-full rounded-full border border-divider bg-transparent px-4 py-3 text-sm text-primary placeholder:text-body focus:border-accent focus:outline-none"
            />
        </div>

            <input 
            name="phone"
            value={values.phone}
            onChange={handleChange}
            placeholder="Phone No"
            required
            className="w-full rounded-full border border-divider bg-transparent px-4 py-3 text-sm text-primary placeholder:text-body focus:border-accent focus:outline-none"
            />

            <input 
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="E-mail"
            required
            className="w-full rounded-full border border-divider bg-transparent px-4 py-3 text-sm text-primary placeholder:text-body focus:border-accent focus:outline-none"
            />

            <textarea 
            name="message"
            rows={4}
            value={values.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full rounded-[20px] border border-divider bg-transparent px-4 py-3 text-sm text-primary placeholder:text-body focus:border-accent focus:outline-none"
            />
            <Button type="submit" variant="highlighted">
            submit message
            </Button>
            {status === "success" && <p className="mb-0 text-sm font-bold text-accent">Message Sent Successfully!</p>}
            {status === "error" && <p className="mb-0 text-sm font-bold text-accent">Please fill in all required fields</p>}
    </form>
    </>
  )
}

export default MemberContactForm
