import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
    const renderPhrase = () => {
        if (length >= 5 || length === 1) {
            return `${length} человек тусанет сегодня с тобой`;
        } else if (length < 5 && length > 0) {
            return `${length} человека тусанет сегодня с тобой`;
        } else {
            return `Никто с тобой не тусанет!`;
        }
    };

    const getBageClasses = () => {
        let classes = "badge m-2 bg-";
        classes += length === 0 ? "danger" : "primary";
        return classes;
    };
    return (
        <>
            <span className={getBageClasses()}>
                <h2>{renderPhrase()}</h2>
            </span>
        </>
    );
};
SearchStatus.propTypes = {
    length: PropTypes.number.isRequired
};

export default SearchStatus;
