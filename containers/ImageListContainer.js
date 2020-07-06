import { connect } from "react-redux";
import ImageList from "../components/ImageList";

const mapStateToProps = (state) => {
  return {
    results: JSON.stringify(state.searchResults),
  };
};

const ImageListContainer = connect(mapStateToProps)(ImageList);

export default ImageListContainer;
