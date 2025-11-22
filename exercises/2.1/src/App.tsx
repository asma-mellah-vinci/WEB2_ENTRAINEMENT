
interface PageTitleProps {
  title : string;
}

const PageTitle = (props: PageTitleProps) => {
  return (
    <h1>{props.title}</h1>
  );
};

interface CinemaProps {
  cinema_name     : string;
  movie1_title    : string;
  movie1_director : string;
  movie2_title    : string;
  movie2_director : string;
}

const Cinema = (props : CinemaProps) => {
  return (
    <div>
      <h2>{props.cinema_name}</h2>
      <ul>
        <li>
          <strong>{props.movie1_title}</strong> - Réalisateur : {" "} {props.movie1_director}
        </li>
        <li>
          <strong>{props.movie2_title}</strong> - Réalisateur : {" "} {props.movie2_director}
        </li>
      </ul>
    </div>
  );
};

const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";
  const cinema1Movie1Title = "Film 1 - DeBrouckère";
  const cinema1Movie1Director = "Director A";
  const cinema1Movie2Title = "Film 2 - DeBrouckère";
  const cinema1Movie2Director = "Director B";

  const cinema2Name = "UGC Toison d'Or";
  const cinema2Movie1Title = "Film 1 - Toison d'Or";
  const cinema2Movie1Director = "Director C";
  const cinema2Movie2Title = "Film 2 - Toison d'Or";
  const cinema2Movie2Director = "Director D";

  return (
    <div>
      <PageTitle title={pageTitle} />

     <Cinema cinema_name={cinema1Name} 
             movie1_title={cinema1Movie1Title} 
             movie1_director={cinema1Movie1Director}
             movie2_title={cinema1Movie2Title}
             movie2_director={cinema1Movie2Director} />
    
      <Cinema cinema_name={cinema2Name}
              movie1_title={cinema2Movie1Title}
              movie1_director={cinema2Movie1Director}
              movie2_title={cinema2Movie2Title}
              movie2_director={cinema2Movie2Director} />
    </div>
  );
};

export default App ;
