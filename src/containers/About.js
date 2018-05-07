import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import About from '../components/about';
import { getAboutData } from '../redux/actions/about';

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.about
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    getData: getAboutData
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
