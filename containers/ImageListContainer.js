import { connect } from "react-redux";
import ImageList from "../components/ImageList";

const mapStateToProps = (state) => {
  return {
    results: JSON.stringify(state.searchResults),
    screenOrientation: state.screenOrientation,
  };
};

const ImageListContainer = connect(mapStateToProps)(ImageList);

export default ImageListContainer;
