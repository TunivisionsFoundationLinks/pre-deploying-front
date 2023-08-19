import React from "react";

const DossierDownloadLink = ({ dossierFileName }) => {
  const downloadLink = `https://tlink-server.onrender.com/upload/dossier-download/${dossierFileName}`;

  return (
    <a href={downloadLink} download>
      Download Dossier
    </a>
  );
};

export default DossierDownloadLink;
