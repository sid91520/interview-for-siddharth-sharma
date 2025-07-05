import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useContext, useState } from "react";
import { UserContext } from "../../context/filterContext";

function Filter() {
  const [launchType, setLaunchType] = useState('all');
  const {setFilter}=useContext(UserContext)
  const handleChange = (event) => {
    setLaunchType(event.target.value);
    setFilter(event.target.value)
  };
  return (
    <div className="flex justify-between items-center sm:w-[80%] w-full sm:px-0 px-5 sm:py-8 py-4 sm:m-auto">
        <div className="sm:w-[40%] w-[50%]  h-6 bg-green-400"></div>
        <div className="sm:w-[40%] w-[50%] flex flex-row items-center justify-end">
          <div>
            <img
              src="/images/funnnelicon.svg"
              alt="logo"
              className="w-[20px] h-[20px] mt-2 sm:mr-2"
            />
          </div>
          <div>
            <FormControl variant="standard" sx={{ minWidth: 150 }}>
              <InputLabel>All Launches</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={launchType}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={'all'}>All Launches</MenuItem>
                <MenuItem value={'upcoming'}>Upcoming Launches</MenuItem>
                <MenuItem value={'successful'}>Successful Launches</MenuItem>
                <MenuItem value={'failed'}>Failed Launches</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
  )
}

export default Filter
