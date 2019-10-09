import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.3532345304284!2d77.29984401445556!3d28.589178092793947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce48907b9ef0f%3A0x8d0cf5c34a0963e1!2sNew%20Ashok%20Nagar%20Metro%20Station!5e0!3m2!1sen!2sin!4v1570539880687!5m2!1sen!2sin"
            width="100%"
            height="500px"
            frameborder="0"
            allowFullScreen>
      </iframe>
      <div className="location_tag">
         <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
