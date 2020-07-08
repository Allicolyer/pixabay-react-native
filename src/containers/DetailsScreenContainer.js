import { connect } from "react-redux";
import DetailsScreen from "../screens/DetailsScreen";

//maps the screen orientation from the redux store to the DetailsScreen props
const mapStateToProps = (state) => {
  return {
    screenDimensions: state.screenDimensions,
  };
};

const DetailsScreenContainer = connect(mapStateToProps)(DetailsScreen);

export default DetailsScreenContainer;
