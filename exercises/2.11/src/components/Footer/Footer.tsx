import "./Footer.css"

interface FooterProps {
    urlLogo : string;
    children : React.ReactNode;
}


const Footer  = ({urlLogo , children} : FooterProps) => {

    return (
        <footer className="footer">
            <img src={urlLogo} alt="logo" className="logoF" width={50}/>
            <div className="text">
                {children}
            </div>
        </footer>
    );
};

export default Footer;