import { jsx as _jsx } from "react/jsx-runtime";
import { CartProvider } from "./Context/CartContext";
import Router from "./routes/index.router";
function App() {
    return (_jsx(CartProvider, { children: _jsx(Router, {}) }));
}
export default App;
