import  { ReactNode, createContext, useState  } from "react"
import { useNavigate } from "react-router-dom"
  
  
  export interface AuthContextData {
    authenticated: boolean;
    user: IUserInfo | null;
    token: string | null;
    setToken: (token: string | null) => void;
    userLogin: (email: string, password: string) => void;
    userLogout: () => void;
    userAdmin: () =>  boolean;
  }
  
  export type  IUserInfo = {
    email: string,
    password: string,
    isAdmin: boolean
  } 
    
  
  
  
  export const AuthContext = createContext<AuthContextData>({
      authenticated: false,
      user: null,
      token: null,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      setToken: () => {},
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      userLogin: () => {},
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      userLogout: () => {},
      userAdmin: () => false,
    });
  
  export const AuthProvider = ({ children }:{ children: ReactNode }) => {
      
      const navigate = useNavigate() 
      const [ user, setUser] = useState<IUserInfo | null >(null) // userState com usuario iniciando nulo
      const [token, setToken] = useState<string | null>(null)
      const authenticated = !!user;
      
  
      const userLogin = (email: string, password: string) => {
          console.log('Login auth', {email, password})
          const tokenFromAPI = 'TOKEN_FROM_API'
          setUser({password, email, isAdmin: true})
          setToken(tokenFromAPI)
          
          
      }
  
      const userAdmin = () => {
        return !!user?.isAdmin;
      }
  
      const userLogout = () => {
          console.log('Logout')
          setUser(null)
          setToken(null)
          navigate('/')
      }
  
      const updateToken = (newToken: string | null) => {
        setToken(newToken);
      };
  
      return(
          
        <AuthContext.Provider
        value={{
          authenticated,
          user,
          token,
          setToken: updateToken,
          userLogin,
          userLogout,
          userAdmin,
        }}
      >
           {children}   
          </AuthContext.Provider>
          
  
      )
  }