import React, { useState } from 'react'

const ROLES = ["Frontend", "Backend", "Fullstack"];

const ManualForm = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        role: "Frontend",
        experience: "",
        cover: "",
    })


const [errors, setErrors] = useState({});
const [submitted, setSubmitted] = useState(false);

function set(field) {
    return (e) => {
        setValues((v) => ({ ...v, [field]: e.target.value }));
    }
}

function validate(v) {
    const e = {};
    if(!v.name.trim()) e.name = "Name is required";
    if(!v.email.trim()) e.email = "Email is required";
    if(!v.experience.trim()) e.experience = "Experience is required";
    if(!v.cover.trim()) e.cover = "Cover letter is required";

    return e;
}

function submit(ev) {
    ev.preventDefault();
    const e = validate(values);
    setErrors(e);

    if(Object.keys(e).length === 0) setSubmitted(true);
}

if (submitted) {
    return (
        <div>
            <h2>Form Submitted Successfully!</h2>
        </div>
    );
}

return (
    <div>
        <form onSubmit={submit} noValidate>
            <label htmlFor="name">
                Full Name
            <input value={values.name} onChange={set("name")} />
            </label>
            {errors.name && <span>{errors.name}</span>}

            <label>
                Email
            <input value={values.email} onChange={set("email")} />
            </label>
            {errors.email && <span>{errors.email}</span>}

            <button type='submit'>Submit</button>
        </form>
    </div>
)
}

export default ManualForm;