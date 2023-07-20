import React from "react";
import Navbar from "../Navbar/Navbar";
import './About.css';
import im from './smiling-secretary-writing-notes.jpg'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import po from './ponnuu.png';

const About = () => {
    return(
        <>
        <div>

        <Navbar/>
        </div>
        <div>
          <br></br>
         <h1 className="AC">Acres.com</h1>
         <br></br>
       
      <div className="pa">
        
       <p className="line">
        Welcome to the Acres.com System, a comprehensive solution for managing properties, tenants, and rental transactions. Our system is designed to streamline and automate various real estate management tasks, helping property owners, managers, and agents to efficiently handle their operations.The companies must comply with any state and local landlord-tenant laws and regulations.
        Real estate management is utilized for any type of rental property, including residential rentals or commercial real estate. Our company helps manage the daily operations of the rental property or portfolio of properties on behalf of the landlord.
        Good management of properties ensures the safety of other tenants. You are responsible for screening applications and preventing the securing of a lease by any suspicious tenants. You do have the duty to protect your tenants from crime and other possible hazards.
        One of the most important aspects of our website is maintaining good relationships with residents and owners.
      </p>

     
        <img className="ikm" src="https://images.freeimages.com/images/previews/c54/rural-home-1233045.jpg"></img>

      </div>
      {/* <img src="https://images.freeimages.com/images/previews/c54/rural-home-1233045.jpg"></img> */}
      <br></br>
      
      <section className="about-section">
      <div className="cntainer">
        <div className="about-content">
          <h2>About Real Estate</h2>
          <p>
            Welcome to Real Estate, your trusted partner in finding the perfect home. We specialize in providing top-notch real estate services, connecting buyers and sellers, and making the process smooth and hassle-free.
          </p>
          <p>
            With years of experience in the industry, we have established a strong reputation for delivering exceptional results. Our team of dedicated professionals is committed to understanding your unique requirements and guiding you every step of the way.
          </p>
        </div>
        <div className="image-container">
          <img src="https://img.freepik.com/free-photo/modern-residential-district-with-green-roof-balcony-generated-by-ai_188544-10276.jpg?size=626&ext=jpg&ga=GA1.2.1428761677.1689065684&semt=sph" alt="About" className="about-image" />
        </div>
      </div>
    </section>

    <h3 className="om">Our Management System </h3>
    <br></br>
    <br></br>
      

    <div className="ca">

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://img.freepik.com/free-photo/hands-agent-client-shaking-hands-after-signed-contract-buy-new-apartment_1150-14836.jpg?size=626&ext=jpg&ga=GA1.1.1428761677.1689065684&semt=ais"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Property management
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Property management is the daily oversight of residential, commercial, or industrial real estate by a third-party contractor.
        Easily create and manage property listings. Keep track of property details, such as location, amenities, and rental history. Upload photos and property documents for easy access.
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>

    <div className="co">

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://img.freepik.com/free-vector/flat-design-real-estate-searching-with-gadgets_23-2148653817.jpg?size=626&ext=jpg&ga=GA1.2.1428761677.1689065684&semt=ais"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Tenant management
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Tenant management is quite simply the organization of your renters, rent payments, maintenance, documents, and processes.
        Easily create and manage property listings. Keep track of property details, such as location, amenities, and rental history. Upload photos and property documents for easy access.
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>

    </div>

    <div className="ci">

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://img.lovepik.com/element/45009/5151.png_860.png"
        title="green iguana"
      />

      

    
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Rental Transactions
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Track rental transactions, generate invoices, and record payments. Our system provides a seamless rental payment experience for tenants and offers robust financial reporting for property owners.
        Rental Transaction means the transfer of possession of a vehicle for consideration without transfer of ownership.
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
      {/* </CardActions> */}
    </Card>

    </div>

    





<div className="cd">

  
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.jpg?b=1&s=170667a&w=0&k=20&c=F4ePFhK7r539j0_I2l1Zi01SX5ESqTvu_NtqjjOUoNQ="
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Data Analytics
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Gain valuable insights into your real estate portfolio with our data analytics feature.Visualize property performance,occupancy rates,rental trends,and more through intuitive charts and graphs.
        Data analytics help a business optimize its performance, perform more efficiently, maximize profit,or make more strategically-guided decisions. 
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>

    </div>

    </div>
    <br></br>
    <br></br>
 

    <div className="w">

    <img className="ponnu" src={po} alt="pi"></img>
    <div className="or">

      <h2 className="highlight-text">Why Choose Us?  </h2>
      <br></br>
      <p>
        Our Real Estate Management System is built with the latest technologies to ensure a smooth and user-friendly experience. Here are a few reasons why you should choose our system:
      </p>
      <ul>
      <li>Intuitive and responsive user interface.</li>
        <li>Robust security measures to protect your data.</li>
        <li>Scalable architecture to accommodate your growing real estate business.</li>
        <li>Regular updates and improvements based on user feedback.</li>
        <li>24/7 customer support to assist you whenever you need help.</li>
        </ul>
    </div>
    
       
       
      
      </div>  
      <br></br>
      <br></br>
      <br></br>
      
      {/* <p>
        Whether you are a property owner, manager, or agent, our Real Estate Management System is designed to simplify your day-to-day operations and enhance your productivity. Get started today and experience the benefits of efficient real estate management.
      </p> */}
      <footer className="foo">
      <div className="footer-section">
            <h3 className="ta">Contact Us</h3>
            <div className="m">
            <p>123 Main Street, City</p>
            <div className="q">
            <p>Email: info@example.com</p>
          
            <p>Phone: 123-456-7890</p>
            </div>
            </div>
            
      </div>

     <br></br>
     <br></br>
          
      <div className="cont">
        <p>&copy; {new Date().getFullYear()} Acres.com</p>
      </div>
    </footer>
    </div>


      
        </>
    )
}
export default About