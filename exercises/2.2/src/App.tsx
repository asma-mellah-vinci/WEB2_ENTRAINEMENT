
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
  movie1          : MovieProps;
  movie2          : MovieProps;
}

const Cinema = (props : CinemaProps) => {
  return (
    <div>
      <h2>{props.cinema_name}</h2>
      <ul>
        <li>
          <strong>{props.movie1.title}</strong> - Realisateur : {" "} {props.movie1.director}
        </li>
        <li>
          <strong>{props.movie2.title}</strong> - Realisateur : {" "} {props.movie2.director}
        </li>
      </ul>
    </div>
  );
};

interface MovieProps {
  title    : string;
  director : string;
};

const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";

  const movie1 = {
    title: "HAIKYU-THE DUMPSTER BATTLE",
    director: "Susumu Mitsunaka",
  };
  const movie2 = {
    title: "GOODBYE JULIA ",
    director: "Mohamed Kordofani",
  };

  const cinema2Name = "UGC Toison d'Or";
  const movie3 = {
    title: "THE WATCHERS",
    director: "Ishana Night Shyamalan",
  };
  const movie4 = {
    title: "BAD BOYS: RIDE OR DIE",
    director: "Adil El Arbi, Bilall Fallah",
  };

  return (
    <div>
      <PageTitle title={pageTitle} />

      <Cinema cinema_name={cinema1Name} movie1={movie1}  movie2={movie2}/>
    
      <Cinema cinema_name={cinema2Name} movie1={movie3}  movie2={movie4}/>

    </div>
  );
};

export default App ;
