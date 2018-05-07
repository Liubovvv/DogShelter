import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadData} from 'store/domains/actions';
import Home from './view';
import {selectBreedsList} from 'store/domains/selectors';

const mapStateToProps = state => ({
    breedList: selectBreedsList(state),
});

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        loadData,
    }, dispatch
);
export default connect(mapStateToProps, mapDispatchToProps)(Home);
