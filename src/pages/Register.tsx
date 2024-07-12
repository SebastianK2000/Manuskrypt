import { useState } from "react";
import "../style/register.css";
import FormInput from "../components/FormInput";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RegisterRoot = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    position: relative;

`;

const Register = () => {
    const [values, setValues] = useState<{
        [key: string]: string;
    }>({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage:
                "Username should be 3-16 characters and shouldn't include any special character!",
            label: "Username",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true,
        },
        {
            id: 3,
            name: "birthday",
            type: "date",
            placeholder: "Birthday",
            label: "Birthday",
            errorMessage: "",
        },
        {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage:
                "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 5,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Passwords don't match!",
            label: "Confirm Password",
            pattern: values.password,
            required: true,
        },
    ];

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    return (
        <RegisterRoot>
            <div className="Register">
                <form className="register-form" onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    {inputs.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                        />
                    ))}
                    <button type="submit">Submit</button>

                    <div className="registerLink">
                        <p>Do you have an account?<Link to="/Login">  Log in</Link></p>
                        <p>Do you don't need account?<Link to="/Books">  Back to the book page</Link></p>
                    </div>
                </form>
            </div>     
        </RegisterRoot>
    );
};

export default Register;
