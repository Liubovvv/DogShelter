import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { loadData, getRandomFooterImages } from 'store/domains/actions';
import Home from './view';
import { selectBreeds, selectImages, selectFooterImages } from 'store/domains/selectors';

const mapStateToProps = state => ({
    ids: selectBreeds(state),
    images: selectImages(state),
    footerImages: selectFooterImages(state)

});

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        loadData,getRandomFooterImages
    }, dispatch
);
export default connect(mapStateToProps, mapDispatchToProps)(Home);
