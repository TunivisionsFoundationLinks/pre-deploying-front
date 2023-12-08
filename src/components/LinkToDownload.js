import React from "react";

const DossierDownloadLink = ({ dossierFileName }) => {
  const downloadLink = `https://tlinkbackendserver.onrender.com/images/${dossierFileName}`;

  return (
    <a href={downloadLink} download>
      Download Dossier
    </a>
  );
};

export default DossierDownloadLink;
