import { connect } from "react-redux";
import DetailsScreen from "../screens/DetailsScreen";

//maps the screen orientation from the redux store to the DetailsScreen props
const mapStateToProps = (state) => {
  return {
    screenOrientation: state.screenDimensions.screenOrientation,
  };
};

const DetailsScreenContainer = connect(mapStateToProps)(DetailsScreen);

export default DetailsScreenContainer;
