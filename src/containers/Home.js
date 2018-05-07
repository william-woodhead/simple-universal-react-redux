import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/home';
import { getHomeData } from '../redux/actions/home';

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.home
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    getData: getHomeData
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
