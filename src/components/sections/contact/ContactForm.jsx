import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const initialState = {fname: "", lname: "", phone: "", email: "", message: ""}

const ContactForm = () => {
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
      <Reveal delay={0.2}>
        <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
            <Field name="fname" placeholder="First Name" value={values.fname} onChange={handleChange} required />
            <Field name="lname" placeholder="Last Name" value={values.lname} onChange={handleChange} required />
            <Field name="phone" placeholder="Enter Your mobile no." value={values.phone} onChange={handleChange} required />
            <Field type="email" name="email" placeholder="Enter Your E-mail" value={values.email} onChange={handleChange} required />

            <div className="sm:col-span-2">
                <textarea name="message" rows={4} placeholder="Write Message..." value={values.message} onChange={handleChange} className="w-full rounded-[20px] border border-divider bg-transparent px-5 py-4 text-primary placeholder:text-body focus:border-accent focus:outline-none" />
            </div>

            <div className="flex flex-wrap items-center gap-6 sm:col-span-2">
                <Button type="submit">submit message</Button>
                {status === "success" && (
                    <p className="mb-0 text-lg font-bold text-accent">Message Sent Successfully</p>
                )}
                {status === "error" && (
                    <p className="mb-0 text-lg font-bold text-error">Please fill in all required fields.</p>
                )}
            </div>
        </form>
      </Reveal>
    </>
  )
}

export default ContactForm;

function Field({type="text",name,placeholder,value,onChange,required}) {
    return (
        <input 
        type={type} 
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xs border border-divider bg-transparent px-5 py-[15px] text-primary placeholder:text-body focus:outline-none"
        />
    )
}
