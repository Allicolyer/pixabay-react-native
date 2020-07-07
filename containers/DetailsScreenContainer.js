import { connect } from "react-redux";
import DetailsScreen from "../components/DetailsScreen";

//maps the screen orientation from the redux store to the DetailsScreen props
const mapStateToProps = (state) => {
  return {
    screenOrientation: state.screenOrientation,
  };
};

const DetailsScreenContainer = connect(mapStateToProps)(DetailsScreen);

export default DetailsScreenContainer;
