import React from "react";
import PropTypes from "prop-types";
import Quality from "./quality";

const QualitiesList = ({ qualities }) => {
    return (
        <React.Fragment>
            {" "}
            {qualities.map((qual) => (
                <Quality key={qual._id} {...qual} />
            ))}{" "}
        </React.Fragment>
    );
};
QualitiesList.propTypes = {
    qualities: PropTypes.array
};

export default QualitiesList;
