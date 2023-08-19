import React from "react";

const DossierDownloadLink = ({ dossierFileName }) => {
  const downloadLink = `http://localhost:5000/upload/dossier-download/${dossierFileName}`;

  return (
    <a href={downloadLink} download>
      Download Dossier
    </a>
  );
};

export default DossierDownloadLink;
