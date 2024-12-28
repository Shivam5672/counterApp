import React, { useState } from 'react';
import classes from './Counter.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [toastNotify, setToastNotify] = useState(false);

    const handleCountChangerBtnClick = (btn) => {
        switch(btn){
            case "inc":
                setCount((prev) => prev + 1);
                break;
            case "dec":
                setCount((prev) => {
                    if(prev > 0){
                        return prev - 1;
                    }
                    else{
                        toast.warn("Value of Count Cannot be negative !");
                        return prev;
                    }
                })
                break;
        }
    }

  return (
    <div className={classes.counterContainer}>
        <div className={classes.counterInnerContainer}>
            <button className={classes.Btn} onClick={() => {handleCountChangerBtnClick("dec")}}>-</button>
            <div className={classes.counterValueContainer}>{count}</div>
            <button className={classes.Btn} onClick={() => {handleCountChangerBtnClick("inc")}}>+</button>
        </div>
        <button className={classes.resetBtn} onClick={() => {
                                                                setCount(0);
                                                                toast.info("Counter reset to zero.");
                                                            }}
        >
            Reset
        </button>
        <ToastContainer/>
    </div>
  )
}

export default Counter