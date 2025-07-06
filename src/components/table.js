import {useContext, useMemo, useState } from "react";
import useFetch from "./customComponents/customFetch/myFetch"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { UserContext } from "../context/filterContext";
import CircularProgress from "@mui/material/CircularProgress";
import BasicModal from "./modal/modal";

function createData(no, Launched,missionId, mission, orbit, launchStatus,rocket) {
  return { no, Launched,missionId, mission, orbit, launchStatus,rocket };
}
function Table1() {
  const {data,loading,error}=useFetch('https://api.spacexdata.com/v5/launches')
  const {filter}=useContext(UserContext)
  const filteredData=data.filter((item)=>{
    if(filter==='all'){
      return item
    }else if((item.upcoming===true || item.tbd!==true || item.success!==true) && filter==='upcoming'){
      return item.upcoming===true
    }else if((item.upcoming!==true || item.tbd!==true || item.success===true) && filter==='successful'){
      return item.success===true
    }else{
      return item.upcoming!==true && item.success!==true && item.tbd !==true
    }
  })
  const [modal, setModal] = useState({ open: false, id: null });
  const row=useMemo(()=>{
    return filteredData.map((launch,idx)=>{
      const launchedDate=new Date(launch.date_local).toLocaleString()
      const mission  = launch.name ?? "—";
       const orbit ='LEO'
       const missionId=launch.id
        const launchStatus = launch.upcoming
        ? "Upcoming"
        : launch.success
        ? "Success"
        : "Failure";
         const rocket = launch.rocket;
         return createData(idx + 1, launchedDate, missionId, mission, orbit, launchStatus, rocket);
    })
  },[filteredData])
    if (loading) return <div className="h-[30%] w-full flex justify-center items-center"><CircularProgress color="success" /></div>;
  if (error)   return <p>Error: {error.message}</p>;

   
  const handleRowClick=(launchId)=>setModal({ open: true, id: launchId });

  return (    
    <>
     <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 750,margin:"auto"}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>No:</TableCell>
            <TableCell align="right">Launched</TableCell>
            <TableCell align="right">mission</TableCell>
            <TableCell align="right">Orbit</TableCell>
            <TableCell align="right">Launch Status</TableCell>
            <TableCell align="right">rocket</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {row.map((row) => (
            <TableRow
              key={row.no}
              onClick={() => handleRowClick(row.missionId)}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.no}
              </TableCell>
              <TableCell align="right">{row.Launched}</TableCell>
              <TableCell align="right">{row.mission}</TableCell>
              <TableCell align="right">{row.orbit}</TableCell>
              <TableCell align="right">
                <Button variant="contained" sx={{backgroundColor:row.launchStatus==="Upcoming"?'yellow':row.launchStatus==="Success"?'green':'red',
                color:row.launchStatus==="Upcoming"?'black':''}}>{row.launchStatus}</Button>
              </TableCell>
              <TableCell align="right">{row.rocket}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <BasicModal
        myLaunchId={modal.id}
        openStatus={modal.open}
        onClose={() => setModal({ open: false, id: null })}
        data={filteredData}
      />
  </>
  )
}

export default Table1
