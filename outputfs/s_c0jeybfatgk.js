import { jsx as _jsx } from "@builder.io/qwik/jsx-runtime";
import { jsxs as _jsxs } from "@builder.io/qwik/jsx-runtime";
import { _wrapSignal } from "@builder.io/qwik";
import { qrl } from "@builder.io/qwik";
import { useStore } from "@builder.io/qwik";
export const s_C0JeybFaTgk = ()=>{
    const store = useStore({
        count: 0
    });
    return /*#__PURE__*/ _jsxs("div", {
        children: [
            /*#__PURE__*/ _jsxs("p", {
                children: [
                    "Count: ",
                    _wrapSignal(store, "count")
                ]
            }),
            /*#__PURE__*/ _jsx("p", {
                children: /*#__PURE__*/ _jsx("button", {
                    onClick$: qrl(()=>import("./entry_Counter"), "s_sUJlug8vQA8", [
                        store
                    ]),
                    children: "Click"
                })
            })
        ]
    });
};
