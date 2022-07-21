import React from "react";
import { useSnapshot } from "valtio";

import { state } from "../store";

export function Counter(): JSX.Element {
    const snap = useSnapshot(state);

    return (
        <div className="my-6 flex">
            <span className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                {snap.count}
            </span>

            <button
                className="shadow-md h-100 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
                onClick={() => ++state.count}
            >
                +1
            </button>
        </div>
    );
}
