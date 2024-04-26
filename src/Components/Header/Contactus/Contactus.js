import React from "react";
import "./Contactus.css";
import { Paper, Typography } from "@mui/material";

function Contactus() {
  return (
    <div className="contact-page">
      <h2 className="cd">College Details:</h2>
      {/* College Section */}
      <div className="contact-details">
        <Paper elevation={4} className="member">
          <Typography variant="h6">
            <strong>Location:</strong> JNTU-Gurajada College of Engineering
            Vizianagaram,
            <br />
            Nh 43, Dwarapudi (Post), Vizianagaram, Andhra Pradesh, Andhra
            Pradesh 535003 · ~4.8 km
          </Typography><br/>
          <Typography variant="h6">
            <strong>Training and placement cell co-ordinator:</strong> Dr.T.S.N.Murthy
          </Typography>
          <Typography variant="h6">
            <strong>Contact Number:</strong> 76739 55559
          </Typography>
          <Typography variant="h6">
            <strong>Email:</strong> tpo@jntugvcev.edu.in
          </Typography><br/>
          <Typography variant="h6">
            <strong>Supporting Staff:</strong> Mr.Mahesh
          </Typography>
          <Typography variant="h6">
            <strong>Contact Number:</strong> 99635 85117
          </Typography>
        </Paper>
        <Paper elevation={4} className="map-container">
          <iframe
            title="JNTU Vizianagaram Campus Map"
            width="500"
            height="100%"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Jawaharlal%20Nehru%20Technological%20University-Gurajada%20College%20Engineering%20Vizianagaram,%20Nh%2043,%20Dwarapudi%20(Post),%20Vizianagaram,%20Andhra%20Pradesh,%20Andhra%20Pradesh%20535003+(Jawaharlal%20Nehru%20Technological%20University-Gurajada%20College%20of%20Engineering%20Vizianagaram)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </Paper>
      </div>

      {/* Additional Contact Section */}
      <div className="additional-contact-section ">
        <h2 className="cd">Additional Contact Details:</h2>

        <div className="contact-cards">
          

         

          {/* Member 3 */}
          <Paper elevation={4} className="paper-details">
            <Typography variant="h6">
              <strong>Principal Office</strong>{" "}
            </Typography>
            <Typography variant="p">Contact Number: +91 89222 94997</Typography>
            <Typography variant="p">Email: ece@jntugv.edu.in</Typography>
          </Paper>
        </div>
      </div>
    </div>
  );
}

export default Contactus;