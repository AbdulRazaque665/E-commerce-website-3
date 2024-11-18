import { Button, Card } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from '@mui/material/Typography'
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';

const Offcanvas = (props) => {
   const {open , toggleDrawer} = props
   
   const [cartItems, setCartItems] = useState([])

   useEffect(()=>{
    const localeCartItems = localStorage.getItem("Products" || [])
    const parseData = JSON.parse(localeCartItems)
    setCartItems(parseData)
  },[open])

  const removeFuntion = (item) =>{
    setCartItems(cartItems.filter((product) => product.id !== item))    
  }
  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 350}}
          className="container"
          role="presentation"
        >
          <Box className="d-flex justify-content-between align-items-center mt-3">
         <Typography variant="h5" color="black" sx={{marginLeft:'2%',marginTop:'2%'}}>
           Cart
         </Typography>
         <CloseIcon sx={{cursor:"pointer"}} onClick={toggleDrawer(false)}/>
          </Box>
          <Divider component="li" className="list-unstyled mt-2"/>
          

        <Box className="d-flex flex-column justify-content-between h-100 mt-5">
          
         {cartItems?.map((items,index)=> {
          return (
            <Card key={index} >
             <Box className="d-flex justify-content-start align-items-center p-3">
              <img src={items.img} className="img-fluid w-25" alt="" />
              <Box className="d-flex justify-content-between w-100">
              <Typography variant="body1" color="black">{items.name}</Typography>
              <Typography variant="body2" color="black">{items.price} Rs</Typography>
              <Button variant="text" className="text-danger" onClick={()=> removeFuntion(items.id)} ><CloseIcon/></Button>
              </Box>
             </Box>
            </Card>
          )
         })}
        </Box>
        </Box>
      </Drawer>
    </div>
  )
}

export default Offcanvas