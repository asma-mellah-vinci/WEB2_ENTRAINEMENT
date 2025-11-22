import "./index.css"

interface FooterProps {
    children : React.ReactNode;
    url      : string;
}

const Footer = (props : FooterProps) => {
    return (
        <footer className="footer">
            <img src={props.url} alt ="logo" className="logo"/>
            <div>{props.children}</div>
        </footer>
    );
};

export default Footer;