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
            <strong>Training and placement cell co-ordinator:</strong> Dr. V. S. Vakula
          </Typography>
          <Typography variant="h6">
            <strong>Email:</strong> tpo@jntugvcev.edu.in
          </Typography><br/>
          <Typography variant="h6">
            <strong>Supporting Staff:</strong> Mr.Mahesh
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
    </div>
  );
}

export default Contactus;
