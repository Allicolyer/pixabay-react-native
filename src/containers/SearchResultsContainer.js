import { connect } from "react-redux";
import SearchResults from "../components/SearchResults";

//maps the screen orientation and search results from the redux store to the SearchResults props
const mapStateToProps = (state) => {
  return {
    results: state.searchResults.hits
      ? JSON.stringify(state.searchResults.hits)
      : state.searchResults.hits,
    totalHits: state.searchResults.totalHits,
    screenWidth: state.screenDimensions.screenWidth,
  };
};

const SearchResultsContainer = connect(mapStateToProps)(SearchResults);

export default SearchResultsContainer;
