import React from 'react'

export const Footer = () => {
    let footerr = {
        // position: "absolute"
    }
    return (
        <footer className="bg-dark text-light py-1" style={footerr}>
            <p className="text-center">   
                Copyright &copy; TodoList.com
            </p>
        </footer>
    )
}

export default Footer
