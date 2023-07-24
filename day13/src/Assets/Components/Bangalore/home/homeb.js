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

export default function BasicCard() {
  return (
    <><div className='mb'><img className='img'src='https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_auto,q_auto:best/newscms/2018_30/1355945/home-exterior-today-180726-tease.jpg'></img>
      
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
  <li> Enchantine three bedroom, three bath home with spacious oe bedroom, one bath...</li>
  <li>The number of BHKs in an apartment is an essential factor that influences its price and value in the real estate market.</li>
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
          <Link to="/ownb">

          <Button size="small">Owner details</Button>
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