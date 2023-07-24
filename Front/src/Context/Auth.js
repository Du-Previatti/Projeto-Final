import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext({
    authenticated: false,
    user: null,
    token: null,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setToken: () => { },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    userLogin: () => { },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    userLogout: () => { },
    userAdmin: () => false,
});
export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null); // userState com usuario iniciando nulo
    const [token, setToken] = useState(null);
    const authenticated = !!user;
    const userLogin = (email, password) => {
        console.log('Login auth', { email, password });
        const tokenFromAPI = 'TOKEN_FROM_API';
        setUser({ password, email, isAdmin: true });
        setToken(tokenFromAPI);
    };
    const userAdmin = () => {
        return !!user?.isAdmin;
    };
    const userLogout = () => {
        console.log('Logout');
        setUser(null);
        setToken(null);
        navigate('/');
    };
    const updateToken = (newToken) => {
        setToken(newToken);
    };
    return (_jsx(AuthContext.Provider, { value: {
            authenticated,
            user,
            token,
            setToken: updateToken,
            userLogin,
            userLogout,
            userAdmin,
        }, children: children }));
};
