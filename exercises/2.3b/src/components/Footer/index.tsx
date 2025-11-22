interface FooterProps {
    footerText : string;
}

const Footer = (props : FooterProps) => {
    return (
        <h4>{props.footerText}</h4>
    );
};

export default Footer;