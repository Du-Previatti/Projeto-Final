import { CartProvider } from "./Context/CartContext"
import Router from "./routes/index.router"


function App() {
  
  return (
  
  <CartProvider>
    <Router/>
   </CartProvider>
   
  
  )
}
      



export default App
