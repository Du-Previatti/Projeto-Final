import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useNavigate } from 'react-router-dom';
import LogoPng from '../../assets/black_logo.png';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { loginFormSchema } from './schema';
import { AuthContext } from '../../Context/Auth';
import { useContext, } from 'react';
import { loginNewUser } from '../../services/login.service';
import toast, { Toaster } from 'react-hot-toast';
export default function Login() {
    const { register, handleSubmit, formState: { isSubmitting, errors, } } = useForm({
        resolver: zodResolver(loginFormSchema)
    });
    const { userLogin, setToken, authenticated } = useContext(AuthContext);
    const navigate = useNavigate();
    const submitLogin = async (data) => {
        try {
            const response = await loginNewUser(data.email, data.password);
            const token = response.token;
            if (token) {
                userLogin(data.email, data.password);
                setToken(token);
                localStorage.setItem('@userInfo', JSON.stringify({ emailUser: data.email, token }));
                navigate('/');
            }
        }
        catch (error) {
            toast.error("Email ou password incorreto");
        }
    };
    return (_jsxs("div", { className: "bg-black-400 h-screen flex justify-center items-center", children: [_jsxs("div", { className: "w-[456px] bg-white rounded-lg flex flex-col justify-center px-6 py-12 lg:px-8", children: [_jsxs("div", { className: "sm:mx-auto sm:w-full sm:max-w-sm", children: [_jsx("img", { className: "mx-auto h-10 w-auto", src: LogoPng, alt: "Logo Deep Music" }), _jsx("h2", { className: "mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900", children: "Bem-vindo de volta!" })] }), _jsxs("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm", children: [_jsxs("form", { onSubmit: handleSubmit(submitLogin), className: "space-y-6", action: "#", method: "POST", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: "E-mail" }), _jsxs("div", { className: "mt-2", children: [_jsx("input", { type: "text", ...register('email'), className: "block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" }), errors.email && _jsx("p", { children: errors.email?.message })] })] }), _jsxs("div", { children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: "Senha" }), _jsx("div", { className: "text-sm", children: _jsx("a", { href: "#", className: "font-semibold text-indigo-600 hover:text-indigo-500", children: "Esqueceu a senha?" }) })] }), _jsxs("div", { className: "mt-2", children: [_jsx("input", { type: "password", ...register('password'), className: "block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" }), errors.password && _jsx("p", { children: errors.password?.message })] })] }), _jsx("div", { children: _jsx("button", { type: "submit", disabled: isSubmitting, className: "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", children: authenticated ? 'Sair' : 'Entrar' }) })] }), _jsxs("p", { className: "mt-10 text-center text-sm text-gray-500", children: ["N\u00E3o tem uma conta?", _jsx(Link, { to: "/register", className: "font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-1", children: "Registre-se" })] })] })] }), _jsx(Toaster, { position: "top-right", reverseOrder: false })] }));
}
