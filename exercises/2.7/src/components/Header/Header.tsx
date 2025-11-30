import "./Header.css"

interface Header {
    urlLogo : string;
    children : React.ReactNode;
}

const Header = ({urlLogo , children} : Header) => {
   
    return (
        <header className="header">
            <img src={urlLogo} alt="logo" className="logo" width={50} />
            <div className="texte">
                {children}
            </div>
        </header>
    )
};

export default Header;