import useFetch from "./components/customComponents/customFetch/myFetch";
import Filter from "./components/filterAndDate/filter";

function App() {
  const {data,loading,error}=useFetch('https://api.spacexdata.com/v5/launches')
  return (
    <div className="w-full h-screen bg-[#FFFFFF]">
      <div className="flex justify-center items-center w-full sm:h-[5vw] h-[10vw] border-2 border-[#005288]">
        <img
          src="/images/Logo.svg"
          alt="logo"
          className="sm:w-[260px] sm:h-[32px] w-[120px] h-[20px] "
        />
      </div>
      <Filter/>
    </div>
  );
}

export default App;
