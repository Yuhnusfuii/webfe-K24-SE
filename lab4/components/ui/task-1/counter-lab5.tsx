"use client";

import { Button } from "@/components/ui/button";
import { useCounter } from "@/hooks/useCounter";

export default function Counter() {
    const { count, increment, decrement, reset, min, max } = useCounter(-10, 10, 3);

    return (
        <main className="flex justify-center px-4 py-10">
            <div className="w-full max-w-3xl text-slate-200">
                <h1 className="text-2xl font-semibold mb-4 text-slate-100">Counter</h1>
                <div className="mb-4 text-4xl font-mono text-center">{count}</div>
                <div className="flex gap-4 justify-center">
                    <Button variant="secondary" onClick={decrement}>
                        Decrement
                    </Button>
                    <Button variant="secondary" onClick={reset}>
                        Reset
                    </Button>
                    <Button variant="secondary" onClick={increment}>
                        Increment
                    </Button>
                </div>
                <p className="text-slate-400">
                    Giới hạn: {min} đến {max}
                </p>
            </div>
        </main>
    );
}