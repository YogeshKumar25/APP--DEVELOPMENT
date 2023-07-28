import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './mba.css';
import { Link } from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function OasicCard() {
  return (
    <><div className='mb'><img className='img'src='https://images.unsplash.com/photo-1615567964485-0ee76b5b3410?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdlbnRsZW1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'></img>
      
      <Card sx={{ minWidth: 650, marginLeft: 8,marginTop:12}}>
        <CardContent>
          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            MBA
          </Typography>
          MBA Full Form: Master of Business Administration
          
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
          MBA Course Level: Post Graduation Degree Course 
          </Typography>
          <Typography>Types of MBA: Full Time MBA, Online MBA, Executive MBA, Distance MBA, Integrated MBA</Typography>
          <Typography></Typography> */}
          <h1 className='cd'>Owner Details</h1>
          <ul className='poi'>
  <li></li>
  <li>Few things are more exciting than leaping from being a renter to being a first-time homeowner. </li>
  <li>Getting swept up in all the excitement is a wonderful feeling, but some first-time homeowners lose their heads and make mistakes that can jeopardize everything they've worked so hard to earn.</li>
  <li>Name: stephen murphy</li>
  <li>Age:58</li>
  <li>Contact:678907636</li>
  <li>Nationality:American</li>
  <li>property legal owner:3(include me)</li>
  <li>property worth: INR 5,000,000 – INR 18,000,000</li>
  <li>property documents:legal type</li>
</ul>
          
        </CardContent>
        <CardActions>
          <Link to="/Apply">

          <Button size="small">Buy now</Button>
          </Link>
        </CardActions>
      </Card>
    </div></>
  );
}








// import React from 'react';
// import Homepage from './home';
// import Navbar from './Nav';

// export default function Mba() {
//   return (
// <div>
//     <Navbar/>
//     <h1>MBA</h1>
// </div>
//   );
// }