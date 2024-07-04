import { useState } from "react";
import propTypes from "prop-types";
import "./expStyle.scss";

export default function Formation({ form }) {
  //state + fonction pour cacher/afficher les information dans les Formations avec le boutton
  const [showDetail, setShowDetail] = useState(false);
  const handleToggle = () => setShowDetail(!showDetail);

  return (
    <li className="list">
      <span className="title">
        <h3>{form.ecole}</h3>
        <button onClick={handleToggle} className="buttonMore">
          {showDetail ? "-" : "+"}
        </button>
      </span>
      {showDetail && (
        <div className="containExp">
          <h4>{form.titre}</h4>
          <p>{form.date}</p>
        </div>
      )}
    </li>
  );
}

Formation.propTypes = {
  form: propTypes.shape(
    {
      poste: propTypes.string.isRequired,
      entreprise: propTypes.string.isRequired,
      periode: propTypes.string.isRequired,
      description: propTypes.string.isRequired,
    }.isRequired
  ),
};
