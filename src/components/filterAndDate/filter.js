import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Filter() {
  return (
    <div className="flex justify-evenly items-center sm:w-[80%] w-full sm:px-0 px-5 sm:py-8 py-4 sm:m-auto">
        {/* <div className="sm:w-[40%] w-[50%]  h-6 bg-green-400"></div> */}
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
                value={""}
                label="Age"
                onChange={""}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
  )
}

export default Filter
