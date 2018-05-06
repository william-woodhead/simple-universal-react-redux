import { connect } from 'react-redux';
import Home from '../components/home';

const mapStateToProps = (state, ownProps) => {
  return {
    app: state.app
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
