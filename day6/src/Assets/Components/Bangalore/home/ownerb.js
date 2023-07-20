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
          <h1 className='cd'>Property Details</h1>
          <ul className='poi'>
  <li>MBA Full Form: Master of Business Administration</li>
  <li>MBA Course Level: Post Graduation Degree Course</li>
  <li>Types of MBA: Full Time MBA, Online MBA, Executive MBA, Distance MBA, Integrated MBA</li>
  <li>Duration of MBA: Full Time MBA: 2 Years; PGDM (MBA equivalent): 2 Years; Online MBA: 1-4 Years; Distance MBA: 2-5 Years; Integrated MBA: 5 Years</li>
  <li>MBA Admission Process: Entrance Exam followed by Group Discussion and Personal Interview</li>
  <li>Top MBA Entrance Exams: CAT, MAT, XAT, CMAT, NMAT, ATMA, IIFT, IBSAT</li>
  <li>MBA Eligibility: 50% in Graduation</li>
  <li>MBA Fees: INR 5,00,000 – INR 18,00,000</li>
  <li>Top MBA Specializations: MBA Finance, MBA in Hr, MBA Marketing, MBA Operations, MBA Digital Marketing</li>
  <li>MBA Scholarships: IDFC First Bank MBA Scholarship, Aditya Birla Scholarship, Yes Bank scholarship, India Carbon Scholarship</li>
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