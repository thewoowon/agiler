import NavBar from "./NavBar"
import type { AppProps } from "next/app"

export default function Layout({children}){
    return (
        <>
            <NavBar></NavBar>
            <div>{children}</div>
        </>
    )
}