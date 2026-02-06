import React, { useEffect, useState } from "react";
function Timer() {
    const [time, setTime] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(time => time + 1);
        }, 1000);

        return () => clearInterval(timer)
    }, [])
    return (
        <div>
            <h1>Count : {time} </h1>
        </div>
    )
}
export default Timer;