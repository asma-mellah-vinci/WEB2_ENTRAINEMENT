import Footer from "./components/Footer";
import PageTitle from "./components/PageTitle";
import UserCard from "./components/UserCard";

const App = () => {
  const title = "Welcome to My App";
  const name1 = "Alice";
  const age1 = 25;
  const name2 = "Bob";
  const age2 = 30;
  const name3 = "Charlie";
  const age3 = 35;
  const footerText = "© 2023 My App";

  return (
    <div>
      <PageTitle title={title} />

      <UserCard name={name1} age={age1} />
      <UserCard name={name2} age={age2} />
      <UserCard name={name3} age={age3} />
      
      <Footer footerText={footerText} />
    </div>
  );
};

export default App;
