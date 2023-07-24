import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faSink, faVectorSquare, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import './Property.css';

const Property = () => {
    return(
        <>

        <div>
            <Navbar/>
        </div>
        <br></br>
        <br></br>
        <div className="P-h1"><h1>“Home is the nicest word there is.”
–Laura Ingalls Wilder, author</h1></div>
<br></br>
        <br></br>
       
        <div className="containe">
     <Link to="/mba"><div className="cards">
        <section className="card">
          <figure>
            <div className="img-overlay hot-home">
              <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_auto,q_auto:best/newscms/2018_30/1355945/home-exterior-today-180726-tease.jpg" alt="Trulli" />
              <div className="overlay"><a href="#">view property</a></div>
              <div className="cont">
                <div className="icons-img">
                  <button><FontAwesomeIcon icon={faHeart} /></button>
                  <button><FontAwesomeIcon icon={faShare} /></button>
                </div>
              </div>
            </div>
            <figcaption>home in Bangalore</figcaption>
          </figure>
          <div className="card-content">
            <p>Enchantine three bedroom, three bath home with spacious oe bedroom, one bath...</p>

            <section className="icons-home">
              <div className="name-icon">
                <span>bedrooms</span>
                <div className="icon">
                  <FontAwesomeIcon icon={faBed} />
                  <span>3</span>
                </div>
              </div>
              <div className="name-icon">
                <span>bathrooms</span>
                <div className="icon">
                  <FontAwesomeIcon icon={faSink} />
                  <span>3</span>
                </div>
              </div>
              <div className="name-icon">
                <span>area</span>
                <div className="icon">
                  <FontAwesomeIcon icon={faVectorSquare} />
                  <span>4300</span>
                </div>
              </div>
              

            </section>
            <section className="price">
              <span>for sale</span>
              <span>$540,000</span>
              <span>Buy</span>
            </section>
           
          </div>
        </section>


      </div></Link>
  
  


    

   
      <div className="cards">
        <section className="card">
          <figure>
            <div className="img-overlay hot-home">
              <img src="https://img.freepik.com/free-photo/charming-yellow-house-with-wooden-windows-green-grassy-garden_181624-8074.jpg?size=626&ext=jpg&ga=GA1.1.1428761677.1689065684&semt=sph" alt="Trulli" />
              <div className="overlay"><a href="#">view property</a></div>
              <div className="cont">
                <div className="icons-img">
                  <button><FontAwesomeIcon icon={faHeart} /></button>
                  <button><FontAwesomeIcon icon={faShare} /></button>
                </div>
              </div>
            </div>
            <figcaption>home in Bangalore</figcaption>
          </figure>
          <div className="card-content">
            <p>Enchantine three bedroom, three bath home with spacious oe bedroom, one bath...</p>

            <section className="icons-home">
              <div className="name-icon">
                <span>bedrooms</span>
                <div className="icon">
                  <FontAwesomeIcon icon={faBed} />
                  <span>3</span>
                </div>
              </div>
              <div className="name-icon">
                <span>bathrooms</span>
                <div className="icon">
                  <FontAwesomeIcon icon={faSink} />
                  <span>3</span>
                </div>
              </div>
              <div className="name-icon">
                <span>area</span>
                <div className="icon">
                  <FontAwesomeIcon icon={faVectorSquare} />
                  <span>4300</span>
                </div>
              </div><br></br>
            </section>
            <section className="price">
              <span>for sale</span>
              <span>$540,000</span>
              <span>Buy</span>
            </section>
          </div>
        </section>

        
      </div>
    


   
      <div className="cards">
        <section className="card">
          <figure>
            <div className="img-overlay hot-home">
              <img src="data:image/jpeg;base64,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" alt="Trulli" />
              <div className="overlay"><a href="#">view property</a></div>
              <div className="cont">
                <div className="icons-img">
                  <button><FontAwesomeIcon icon={faHeart} /></button>
                  <button><FontAwesomeIcon icon={faShare} /></button>
                </div>
              </div>
            </div>
            <figcaption>home in Bangalore</figcaption>
          </figure>
          <div className="card-content">
            <p>Enchantine three bedroom, three bath home with spacious oe bedroom, one bath...</p>

            <section className="icons-home">
              <div className="name-icon">
                <span>bedrooms</span>
                <div className="icon">
                  <FontAwesomeIcon icon={faBed} />
                  <span>3</span>
                </div>
              </div>
              <div className="name-icon">
                <span>bathrooms</span>
                <div className="icon">
                  <FontAwesomeIcon icon={faSink} />
                  <span>3</span>
                </div>
              </div>
              <div className="name-icon">
                <span>area</span>
                <div className="icon">
                  <FontAwesomeIcon icon={faVectorSquare} />
                  <span>4300</span>
                </div>
              </div><br></br>
              

            </section>

            <section className="price">
              <span>for sale</span>
              <span>$540,000</span>
              <span>Buy</span>
            </section>
           
          </div>
        </section>

       
      </div>
   
    


  </div>

  <div className="P-h2"><h1>Property has its duties as well as its rights.</h1> 
  </div>




  <div className="containe">
      <div className="cards">
        <section className="card">
          <figure>
            <div className="img-overlay hot-home">
              <img src="https://www.srivari.co.in/wp-content/uploads/2022/03/ekantam-overview-6.jpg" alt="Trulli" />
              <div className="overlay"><a href="#">view property</a></div>
              <div className="cont">
                <div className="icons-img">
                  <button><FontAwesomeIcon icon={faHeart} /></button>
                  <button><FontAwesomeIcon icon={faShare} /></button>
                </div>
              </div>
            </div>
            <figcaption>villa in Bangalore</figcaption>
          </figure>
          <div className="card-content">
            <p>Enchantine two bedroom, two bath villa with spacious one bedroom, one bath...</p>

            <section className="icons-home">
              <div className="name-icon">
                <span>bedrooms</span>
                <div className="icon">
                  <FontAwesomeIcon icon={faBed} />
                  <span>2</span>
                </div>
              </div>
              <div className="name-icon">
                <span>bathrooms</span>
                <div className="icon">
                  <FontAwesomeIcon icon={faSink} />
                  <span>2</span>
                </div>
              </div>
              <div className="name-icon">
                <span>area</span>
                <div className="icon">
                  <FontAwesomeIcon icon={faVectorSquare} />
                  <span>3300</span>
                </div>
              </div>
              

            </section>
            <section className="price">
              <span>for sale</span>
              <span>$340,000</span>
              <span>Buy</span>
            </section>
           
          </div>
        </section>


      </div>

     
  
  <br></br>





    

   
      <div className="cards">
        <section className="card">
          <figure>
            <div className="img-overlay hot-home">
              <img src="https://www.srivari.co.in/wp-content/uploads/2022/03/ekantam-overview-2.jpg" alt="Trulli" />
              <div className="overlay"><a href="#">view property</a></div>
              <div className="cont">
                <div className="icons-img">
                  <button><FontAwesomeIcon icon={faHeart} /></button>
                  <button><FontAwesomeIcon icon={faShare} /></button>
                </div>
              </div>
            </div>
            <figcaption>villa in Chennai</figcaption>
          </figure>
          <div className="card-content">
            <p>Enchantine super luxurious villa with three bedroom, three bath home with spacious oe bedroom, one bath...</p>

            <section className="icons-home">
              <div className="name-icon">
                <span>bedrooms</span>
                <div className="icon">
                  <FontAwesomeIcon icon={faBed} />
                  <span>3</span>
                </div>
              </div>
              <div className="name-icon">
                <span>bathrooms</span>
                <div className="icon">
                  <FontAwesomeIcon icon={faSink} />
                  <span>3</span>
                </div>
              </div>
              <div className="name-icon">
                <span>area</span>
                <div className="icon">
                  <FontAwesomeIcon icon={faVectorSquare} />
                  <span>4300</span>
                </div>
              </div><br></br>
            </section>
            <section className="price">
              <span>for sale</span>
              <span>$540,000</span>
              <span>Buy</span>
            </section>
          </div>
        </section>

        
      </div>
    


   
      <div className="cards">
        <section className="card">
          <figure>
            <div className="img-overlay hot-home">
              <img src="https://www.srivari.co.in/wp-content/uploads/2022/03/ekantam-overview-7.jpg" alt="Trulli" />
              <div className="overlay"><a href="#">view property</a></div>
              <div className="cont">
                <div className="icons-img">
                  <button><FontAwesomeIcon icon={faHeart} /></button>
                  <button><FontAwesomeIcon icon={faShare} /></button>
                </div>
              </div>
            </div>
            <figcaption>villa in Coimbatore</figcaption>
          </figure>
          <div className="card-content">
            <p>Enchantine the private villa with three bedroom, three bath home with spacious oe bedroom, one bath...</p>

            <section className="icons-home">
              <div className="name-icon">
                <span>bedrooms</span>
                <div className="icon">
                  <FontAwesomeIcon icon={faBed} />
                  <span>3</span>
                </div>
              </div>
              <div className="name-icon">
                <span>bathrooms</span>
                <div className="icon">
                  <FontAwesomeIcon icon={faSink} />
                  <span>3</span>
                </div>
              </div>
              <div className="name-icon">
                <span>area</span>
                <div className="icon">
                  <FontAwesomeIcon icon={faVectorSquare} />
                  <span>4300</span>
                </div>
              </div><br></br>
              

            </section>

            <section className="price">
              <span>for sale</span>
              <span>$540,000</span>
              <span>Buy</span>
            </section>
           
          </div>
        </section>

       
      </div>
   
    


  </div>
 

<br></br>

<div className="P-h3"><h1>Buy land, they aren’t making anymore of it.</h1></div>


<div className="containe">
      <div className="cards">
        <section className="card">
          <figure>
            <div className="img-overlay hot-home">
              <img src="https://wallpapercave.com/dwp1x/wp10389770.jpg" alt="Trulli" />
              <div className="overlay"><a href="#">view property</a></div>
              <div className="cont">
                <div className="icons-img">
                  <button><FontAwesomeIcon icon={faHeart} /></button>
                  <button><FontAwesomeIcon icon={faShare} /></button>
                </div>
              </div>
            </div>
            <figcaption>farmland in Bangalore</figcaption>
          </figure>
          <div className="card-content">
            <p>Farmland in kokrebellur,Bangalore</p>

            <section className="icons-home">
              <div className="name-icon">
                <span>bedrooms</span>
                <div className="icon">
                  <FontAwesomeIcon icon={faBed} />
                  <span>3</span>
                </div>
              </div>
              <div className="name-icon">
                <span>bathrooms</span>
                <div className="icon">
                  <FontAwesomeIcon icon={faSink} />
                  <span>3</span>
                </div>
              </div>
              <div className="name-icon">
                <span>area</span>
                <div className="icon">
                  <FontAwesomeIcon icon={faVectorSquare} />
                  <span>4300</span>
                </div>
              </div>
              

            </section>
            <section className="price">
              <span>for sale</span>
              <span>$540,000</span>
              <span>Buy</span>
            </section>
           
          </div>
        </section>


      </div>
  
  


    

   
      <div className="cards">
        <section className="card">
          <figure>
            <div className="img-overlay hot-home">
              <img src="https://wallpapercave.com/dwp1x/wp10389875.jpg" alt="Trulli" />
              <div className="overlay"><a href="#">view property</a></div>
              <div className="cont">
                <div className="icons-img">
                  <button><FontAwesomeIcon icon={faHeart} /></button>
                  <button><FontAwesomeIcon icon={faShare} /></button>
                </div>
              </div>
            </div>
            <figcaption>farmland in Chennai</figcaption>
          </figure>
          <div className="card-content">
            <p>Farmland in ariyalur,Chennai</p>

            <section className="icons-home">
              <div className="name-icon">
                <span>bedrooms</span>
                <div className="icon">
                  <FontAwesomeIcon icon={faBed} />
                  <span>3</span>
                </div>
              </div>
              <div className="name-icon">
                <span>bathrooms</span>
                <div className="icon">
                  <FontAwesomeIcon icon={faSink} />
                  <span>3</span>
                </div>
              </div>
              <div className="name-icon">
                <span>area</span>
                <div className="icon">
                  <FontAwesomeIcon icon={faVectorSquare} />
                  <span>4300</span>
                </div>
              </div><br></br>
            </section>
            <section className="price">
              <span>for sale</span>
              <span>$540,000</span>
              <span>Buy</span>
            </section>
          </div>
        </section>

        
      </div>
    


   
      <div className="cards">
        <section className="card">
          <figure>
            <div className="img-overlay hot-home">
              <img src="https://wallpapercave.com/dwp1x/wp5357593.jpg" alt="Trulli" />
              <div className="overlay"><a href="#">view property</a></div>
              <div className="cont">
                <div className="icons-img">
                  <button><FontAwesomeIcon icon={faHeart} /></button>
                  <button><FontAwesomeIcon icon={faShare} /></button>
                </div>
              </div>
            </div>
            <figcaption>farmland in Coimbatore</figcaption>
          </figure>
          <div className="card-content">
            <p>Farmland in pollachi,Coimbatore</p>

            <section className="icons-home">
              <div className="name-icon">
                <span>bedrooms</span>
                <div className="icon">
                  <FontAwesomeIcon icon={faBed} />
                  <span>3</span>
                </div>
              </div>
              <div className="name-icon">
                <span>bathrooms</span>
                <div className="icon">
                  <FontAwesomeIcon icon={faSink} />
                  <span>3</span>
                </div>
              </div>
              <div className="name-icon">
                <span>area</span>
                <div className="icon">
                  <FontAwesomeIcon icon={faVectorSquare} />
                  <span>4300</span>
                </div>
              </div><br></br>
              

            </section>

            <section className="price">
              <span>for sale</span>
              <span>$540,000</span>
              <span>Buy</span>
            </section>
           
          </div>
        </section>

       
      </div>
   
    


  </div>
 


<div className="P-h4"><h1>"The land belongs to the future"."The soil is the great connector of our lives, the source and destination of all."</h1></div>



  <div className="containe">
      <div className="cards">
        <section className="card">
          <figure>
            <div className="img-overlay hot-home">
              <img src="https://media.istockphoto.com/id/1145315464/photo/building-plot-melbourne.jpg?s=612x612&w=0&k=20&c=TtGSjOUOL1AiVDFNNA4ImCkNYRbKKeb9459qIMXHCPg=" alt="Trulli" />
              <div className="overlay"><a href="#">view property</a></div>
              <div className="cont">
                <div className="icons-img">
                  <button><FontAwesomeIcon icon={faHeart} /></button>
                  <button><FontAwesomeIcon icon={faShare} /></button>
                </div>
              </div>
            </div>
            <figcaption>buildland in Bangalore</figcaption>
          </figure>
          <div className="card-content">
            <p>Small buildland in bangalore</p>

            <section className="icons-home">
              <div className="name-icon">
                <span>bedrooms</span>
                <div className="icon">
                  <FontAwesomeIcon icon={faBed} />
                  <span>3</span>
                </div>
              </div>
              <div className="name-icon">
                <span>bathrooms</span>
                <div className="icon">
                  <FontAwesomeIcon icon={faSink} />
                  <span>3</span>
                </div>
              </div>
              <div className="name-icon">
                <span>area</span>
                <div className="icon">
                  <FontAwesomeIcon icon={faVectorSquare} />
                  <span>4300</span>
                </div>
              </div>
              

            </section>
            <section className="price">
              <span>for sale</span>
              <span>$540,000</span>
              <span>Buy</span>
            </section>
           
          </div>
        </section>


      </div>
  
  


    

   
      <div className="cards">
        <section className="card">
          <figure>
            <div className="img-overlay hot-home">
              <img src="https://t3.ftcdn.net/jpg/05/35/50/38/240_F_535503848_8CPJTV2aALt3urNrDfZphQXPdk1Vl1Zr.jpg" alt="Trulli" />
              <div className="overlay"><a href="#">view property</a></div>
              <div className="cont">
                <div className="icons-img">
                  <button><FontAwesomeIcon icon={faHeart} /></button>
                  <button><FontAwesomeIcon icon={faShare} /></button>
                </div>
              </div>
            </div>
            <figcaption>farmland in Chennai</figcaption>
          </figure>
          <div className="card-content">
            <p>Farmland in ariyalur,Chennai</p>

            <section className="icons-home">
              <div className="name-icon">
                <span>bedrooms</span>
                <div className="icon">
                  <FontAwesomeIcon icon={faBed} />
                  <span>3</span>
                </div>
              </div>
              <div className="name-icon">
                <span>bathrooms</span>
                <div className="icon">
                  <FontAwesomeIcon icon={faSink} />
                  <span>3</span>
                </div>
              </div>
              <div className="name-icon">
                <span>area</span>
                <div className="icon">
                  <FontAwesomeIcon icon={faVectorSquare} />
                  <span>4300</span>
                </div>
              </div><br></br>
            </section>
            <section className="price">
              <span>for sale</span>
              <span>$540,000</span>
              <span>Buy</span>
            </section>
          </div>
        </section>

        
      </div>
    


   
      <div className="cards">
        <section className="card">
          <figure>
            <div className="img-overlay hot-home">
              <img src="https://media.istockphoto.com/id/92183527/photo/new-construction-site-empty-levelled-ground-farmland-soil-sealing.jpg?s=612x612&w=0&k=20&c=NK2OetVRjUOPNZj2xKzTYYm-vMC1Omr_ECYd6ePuNsg=" alt="Trulli" />
              <div className="overlay"><a href="#">view property</a></div>
              <div className="cont">
                <div className="icons-img">
                  <button><FontAwesomeIcon icon={faHeart} /></button>
                  <button><FontAwesomeIcon icon={faShare} /></button>
                </div>
              </div>
            </div>
            <figcaption>farmland in Coimbatore</figcaption>
          </figure>
          <div className="card-content">
            <p>Farmland in pollachi,Coimbatore</p>

            <section className="icons-home">
              <div className="name-icon">
                <span>bedrooms</span>
                <div className="icon">
                  <FontAwesomeIcon icon={faBed} />
                  <span>3</span>
                </div>
              </div>
              <div className="name-icon">
                <span>bathrooms</span>
                <div className="icon">
                  <FontAwesomeIcon icon={faSink} />
                  <span>3</span>
                </div>
              </div>
              <div className="name-icon">
                <span>area</span>
                <div className="icon">
                  <FontAwesomeIcon icon={faVectorSquare} />
                  <span>4300</span>
                </div>
              </div><br></br>
              

            </section>

            <section className="price">
              <span>for sale</span>
              <span>$540,000</span>
              <span>Buy</span>
            </section>
           
          </div>
        </section>

       
      </div>
   
    


  </div>
 






 
 
        </>
    )
}
export default Property