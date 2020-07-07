import { connect } from "react-redux";
import DetailsScreen from "../components/DetailsScreen";

const mapStateToProps = (state) => {
  return {
    screenOrientation: state.screenOrientation,
  };
};

const DetailsScreenContainer = connect(mapStateToProps)(DetailsScreen);

export default DetailsScreenContainer;
