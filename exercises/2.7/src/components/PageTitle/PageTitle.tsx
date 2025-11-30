import "./PageTitle.css"

interface PageTitle {
    title : string;
}

const PageTitle = ({title} : PageTitle) => {

    return (
        <div>
            <h1 className="title">
                {title}
            </h1>
        </div>
    );
};

export default PageTitle;