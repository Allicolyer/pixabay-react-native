import { connect } from "react-redux";
import ImageList from "../components/ImageList";

//maps the screen orientation and search results from the redux store to the ImageList props
const mapStateToProps = (state) => {
  return {
    results: state.searchResults
      ? JSON.stringify(state.searchResults)
      : state.searchResults,
    screenWidth: state.screenDimensions.screenWidth,
  };
};

const ImageListContainer = connect(mapStateToProps)(ImageList);

export default ImageListContainer;
