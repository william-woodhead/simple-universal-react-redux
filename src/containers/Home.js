import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/home';
import { getData } from '../redux/actions/home';

const mapStateToProps = (state, ownProps) => {
  return {
    app: state.app
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    getData
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
