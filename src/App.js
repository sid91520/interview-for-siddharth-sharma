import Filter from "./components/filterAndDate/filter";
import Table1 from "./components/table";
import { UserProvider } from "./context/filterContext";

function App() {
  return (
    <UserProvider>
    <div className="w-full h-screen bg-[#FFFFFF]">
      <div className="flex justify-center items-center w-full sm:h-[5vw] h-[10vw] border-2 border-[#005288]">
        <img
          src="/images/Logo.svg"
          alt="logo"
          className="sm:w-[260px] sm:h-[32px] w-[120px] h-[20px] "
        />
      </div>
      <Filter/>
      <Table1/>
    </div>
    </UserProvider>
  );
}

export default App;
