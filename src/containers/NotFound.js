import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NotFound from '../components/not-found';

const mapStateToProps = (state, ownProps) => {
  return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotFound);
