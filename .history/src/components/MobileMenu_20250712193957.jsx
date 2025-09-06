import { useEffect } from "react"

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => { 
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen])

    return (

    )
}