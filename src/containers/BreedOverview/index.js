import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { BreedOverviewFooter } from './BreedOverview';

import { getRandomFooterImages } from 'store/domains/actions';

import { selectFooterImages } from 'store/domains/selectors';

const mapStateToProps = state => ({
    footerImages: selectFooterImages(state)
});

const mapDispatchToProps = dispatch => bindActionCreators(
    { getRandomFooterImages }, dispatch
);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(BreedOverviewFooter);