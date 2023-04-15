import React, {useEffect, useState} from "react";
import './Header.css';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {setLogin} from "../../features/login/loginSlice";
import {RootState} from "../../app/store";

const Header = () => {
    const isLoggedIn = useAppSelector((state:RootState) => state.login.value)
    const dispatch = useAppDispatch()

    useEffect(()=> {
        console.log(`State changed in ${Header.name}: ${isLoggedIn}`);
    }, [isLoggedIn])

    const clickHandle = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        dispatch(setLogin(true));
    };

    return <div className="header">
        <button onClick={clickHandle}>Přihlásit se</button>
    </div>
};

export default Header;