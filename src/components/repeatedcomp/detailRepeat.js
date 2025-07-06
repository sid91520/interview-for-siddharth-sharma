function DetailRepeat({ filteredlaunch }) {
  const Manufacturer = ["spaceX", "NASA", "ISRO"];
  const Country = ["India", "USA", "Russia", "UK", "Israel"];
  const randomManufacturer = Math.floor(Math.random() * Manufacturer.length);
  const randomCountry = Math.floor(Math.random() * Country.length);
  const launchedDate = new Date(filteredlaunch.date_local).toLocaleString();
  const datarepeate = [
    { title: "Flight Number", payload: filteredlaunch.flight_number },
    { title: "Mission Name", payload: filteredlaunch.name },
    { title: "Rocket ID", payload: filteredlaunch.rocket },
    { title: "Manufacturer", payload: randomManufacturer },
    { title: "country", payload: randomCountry },
    { title: "Launch Date", payload: launchedDate },
    { title: "Orbit", payload: "LEO" },
    { title: "Launch Site", payload: randomCountry },
  ];
  return (
    <div>
      {datarepeate.map((item) => {
        return <>
          <div className="flex flex-row w-[100%] justify-between" key={item.title}>
            <div className="sm:text-lg text-xs font-medium text-black">{item.title}</div>
            <div className="sm:text-lg text-xs font-medium text-black">{item.payload}</div>
          </div>
          <div className="w-full h-[1px] bg-slate-300 mt-2" />{" "}
        </>;
      })}
    </div>
  );
}

export default DetailRepeat;
