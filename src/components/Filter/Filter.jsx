import PropTypes from "prop-types";

export function Filter({handleFilterChange, filter}) {

    return <input type="text" onChange={handleFilterChange} value={filter} />;
}

Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
