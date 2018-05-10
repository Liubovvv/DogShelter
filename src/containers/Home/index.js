import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { loadData } from 'store/domains/actions';
import Home from './view';
import { selectBreeds, selectImages } from 'store/domains/selectors';

const mapStateToProps = state => ({
    breedList: selectBreeds(state),
    imagesList: selectImages(state),
});

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        loadData,
    }, dispatch
);
export default connect(mapStateToProps, mapDispatchToProps)(Home);
