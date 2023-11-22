// import React, { useEffect, useState } from "react";
// import { Menu, MenuItem, Box, Typography } from "@mui/material";
// import Link from "next/link";
// import Button from "@mui/material/Button";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import {authUtils} from "../firebase/auth-utils";
// import { useRouter } from "next/router";
// import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

// export const HeaderProfileButton = () => {

//   const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);
//   const [username, setUsername] = useState("Loading...");
//   const handleClickOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   const router = useRouter();
//   let currentUserEmailDirty = localStorage.getItem('currentUserEmail');
//   const currentUserEmail = (currentUserEmailDirty ?? "").slice(1, -1);

//   const getCurrentUsername = async () => {
//     const firestore = getFirestore();
//     const usersRef = collection(firestore, 'users');
//     const queryResult = query(usersRef, where("email", "==", currentUserEmail));
//     const querySnapshot = await getDocs(queryResult);
//     const usernameResult = querySnapshot.docs.map((doc) => doc.data());
//     return usernameResult[0].username;
//   }

//   useEffect(() => {
//     const fetchData = async () => {
//         const result = await getCurrentUsername();
//         setUsername(result);
//     };
//     fetchData();
//   });

//   const hover = {
//     "&:hover": {
//       backgroundColor: "blue",
//       transition: 'background-color 0.5s ease'
//     },
//     '&:not(:hover)': {
//       backgroundColor: "black",
//       transition: 'background-color 0.5s ease'
//     },
//   };

//   const handleLogout = () => {
//     localStorage.setItem('loginState', 'false');
//     authUtils.logout();
//     router.push('/login');
//   };

//   return (
//     <>
//     <Button onClick={handleClickOpen} sx={{ display: 'flex' }}>
//         <AccountCircleIcon sx={{ height: '60px', width: '60px', color: "white" }} />
//       </Button>
//       <Box>
//         <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} sx={{ position: 'absolute' }}>
//           <MenuItem sx={{ fontWeight: 'bold', borderBottom: '2px solid ' + "white", padding: '6px 16px', pointerEvents: 'none' }}>
//             <Typography sx={{fontWeight: '550', fontSize: '17px'}}>{username}</Typography>
//           </MenuItem>
//           <MenuItem sx={{ ...hover }}>
//             <Link style={{ color: "white", textDecoration: 'none' }} href={'#'}>Profile</Link>
//           </MenuItem>
//           <MenuItem sx={{ ...hover }}>
//             <Link style={{ color: "white", textDecoration: 'none' }} href={'#'}>Settings</Link>
//           </MenuItem>
//           <MenuItem sx={{ ...hover }}>
//             <Link style={{ color: "white", textDecoration: 'none' }} href={'/login'} onClick={handleLogout}>Logout</Link>
//           </MenuItem>
//         </Menu>
//       </Box>
//     </>    
//   );
// };