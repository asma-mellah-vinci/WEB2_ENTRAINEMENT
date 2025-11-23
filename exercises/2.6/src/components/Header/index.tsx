import "./index.css"

interface HeaderProps {
    children : React.ReactNode;
    url      : string;
}

const Header = (props : HeaderProps) => {
    return (
        <header className="header">
            <img src={props.url} alt ="logo" className="logo"/>
            <div>{props.children}</div>
        </header>
    );
};

export default Header;