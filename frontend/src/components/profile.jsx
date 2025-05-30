import React, { useEffect } from 'react';


export default function Profile() {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
    <div
      className="badge-base LI-profile-badge"
      data-locale="en_US"
      data-size="medium"
      data-theme="light"
      data-type="VERTICAL"
      data-vanity="aryn21"
      data-version="v1"
    >
      <a
        className="badge-base__link LI-simple-link"
        href="https://in.linkedin.com/in/aryn21?trk=profile-badge"
      />
    </div>
  </div>
);

}

              