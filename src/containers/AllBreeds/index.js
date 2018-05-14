import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AllBreeds } from "./AllBreeds";

const mapStateToProps = state => ({

});

export default connect(
    mapStateToProps,
    //mapDispatchToProps,
)(AllBreeds);