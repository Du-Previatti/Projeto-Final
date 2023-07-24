import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import LogoPng from '../../assets/black_logo.png';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const { name, email, password } = formData;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://164.92.97.48:3000/api/users/registerUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });
            if (response.ok) {
                toast.success("Usuario registrado com sucesso!");
            }
            else {
                toast.error("Esse email ja foi cadastrado");
            }
        }
        catch (error) {
            console.error('Erro ao enviar a requisição', error);
        }
    };
    return (_jsxs("div", { className: "bg-black-400 h-screen flex justify-center items-center", children: [_jsxs("div", { className: "w-[456px] bg-white rounded-lg flex flex-col justify-center px-6 py-12 lg:px-8", children: [_jsxs("div", { className: "sm:mx-auto sm:w-full sm:max-w-sm", children: [_jsx("img", { className: "mx-auto h-10 w-auto", src: LogoPng, alt: "Logo Deep Music" }), _jsx("h2", { className: "mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900", children: "Bem-vindo!" })] }), _jsxs("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm", children: [_jsxs("form", { className: "space-y-6", onSubmit: handleSubmit, children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: "Nome" }), _jsx("div", { className: "mt-2", children: _jsx("input", { id: "name", name: "name", type: "text", value: name, onChange: handleChange, autoComplete: "name", required: true, className: "block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" }) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: "E-mail" }), _jsx("div", { className: "mt-2", children: _jsx("input", { id: "email", name: "email", type: "email", value: email, onChange: handleChange, autoComplete: "email", required: true, className: "block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" }) })] }), _jsxs("div", { children: [_jsx("div", { className: "flex items-center justify-between", children: _jsx("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: "Senha" }) }), _jsx("div", { className: "mt-2", children: _jsx("input", { id: "password", name: "password", type: "password", value: password, onChange: handleChange, autoComplete: "current-password", required: true, className: "block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" }) })] }), _jsx("div", { children: _jsx("button", { type: "submit", className: "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", children: "Registrar" }) })] }), _jsxs("p", { className: "mt-10 text-center text-sm text-gray-500", children: ["J\u00E1 tem uma conta?", _jsx(Link, { to: "/login", className: "font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-1", children: "Fa\u00E7a Login" })] })] })] }), _jsx(Toaster, { position: "top-right", reverseOrder: false })] }));
}
