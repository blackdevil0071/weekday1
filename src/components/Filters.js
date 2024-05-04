// import React, { useState, useEffect, useReducer } from "react";
// import { FormControl, Input, MenuItem, Select, TextField, FormHelperText } from "@mui/material";
// import filterReducer from "../redux/reducers/filterReducer";

// const Filters = () => {
//   const [filters, dispatch] = useReducer(filterReducer, {
//     roles: [],
//     employees: [],
//     experience: "",
//     remote: [],
//     techStack: [],
//     minBasePaySalary: "",
//     companyName: ""
//   });

//   // State for storing the options fetched from the API
//   const [employeeOptions, setEmployeeOptions] = useState([]);
//   const [companyOptions, setCompanyOptions] = useState([]);

//   // Fetch options for number of employees
//   useEffect(() => {
//     const fetchEmployeeOptions = async () => {
//       try {
//         // Fetch options from API
//         const response = await fetch("https://api.example.com/employeeOptions");
//         if (!response.ok) {
//           throw new Error("Failed to fetch employee options");
//         }
//         const data = await response.json();
//         // Update state with fetched options
//         setEmployeeOptions(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchEmployeeOptions();
//   }, []);

//   // Fetch options for company names
//   useEffect(() => {
//     const fetchCompanyOptions = async () => {
//       try {
//         // Fetch options from API
//         const response = await fetch("");
//         if (!response.ok) {
//           throw new Error("Failed to fetch company options");
//         }
//         const data = await response.json();
//         // Update state with fetched options
//         setCompanyOptions(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchCompanyOptions();
//   }, []);

//   const handleSelectChange = (filterName, value) => {
//     dispatch({ type: 'SET_FILTER', filterName, value });
//   };

//   return (
//     <div className="profile-sidebar jd-filters-container">
//       <div className="MuiBox-root css-r7so2y">
//         <p>Roles</p>
//         {/* Remaining code for Roles filter */}
//       </div>
//       <div className="MuiBox-root css-1yxoz1i">
//         <p>Number Of Employees</p>
//         <FormControl fullWidth>
//           <Select
//             multiple
//             value={filters.employees}
//             onChange={(event) => handleSelectChange('employees', event.target.value)}
//             input={<Input />}
//             renderValue={(selected) => selected.join(", ")}
//           >
//             {employeeOptions.map(option => (
//               <MenuItem key={option.value} value={option.value}>
//                 {option.label}
//               </MenuItem>
//             ))}
//           </Select>
//           <FormHelperText>Choose one or more options</FormHelperText>
//         </FormControl>
//       </div>
//       <div className="MuiBox-root css-r7so2y">
//         <p>Experience</p>
//         {/* Remaining code for Experience filter */}
//       </div>
//       <div className="MuiBox-root css-1yxoz1i">
//         <p>Remote</p>
//         {/* Remaining code for Remote filter */}
//       </div>
//       <div className="MuiBox-root css-1yxoz1i">
//         <p>Tech Stack</p>
//         {/* Remaining code for Tech Stack filter */}
//       </div>
//       <div className="MuiBox-root css-1yxoz1i">
//         <p>Minimum Base Pay Salary</p>
//         {/* Remaining code for Minimum Base Pay Salary filter */}
//       </div>
//       <div className="MuiBox-root css-j7qwjs">
//         <TextField
//           fullWidth
//           id="companyName"
//           label="Search Company Name"
//           variant="outlined"
//           value={filters.companyName}
//           select
//           onChange={(event) => handleSelectChange('companyName', event.target.value)}
//         >
//           {companyOptions.map(option => (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           ))}
//         </TextField>
//       </div>
//     </div>
//   );
// };

// export default Filters;
