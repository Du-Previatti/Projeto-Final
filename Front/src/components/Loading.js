import { jsx as _jsx } from "react/jsx-runtime";
import { CircleNotch } from "@phosphor-icons/react";
export function Loading() {
    return (_jsx("div", { className: "w-6 h-6 flex items-center justify-center overflow-hidden", children: _jsx(CircleNotch, { weight: "bold", className: "w-4 h-4 animate-spin" }) }));
}
