import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { RandomBreed } from './RandomBreed';

const mapStateToProps = state => ({

});

/*const mapDispatchToProps = dispatch => bindActionCreators(
    {loadData}, dispatch
);*/

export default connect(
    mapStateToProps,
    //mapDispatchToProps,
)(RandomBreed);