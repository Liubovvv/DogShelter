import React from 'react';

import { FooterHOC } from 'components/FooterHOC';

const BreedOverview = () => {
    return(
        <div id={'main-container'}>
            {/*<Image {...dogImage} />
            <Description descriptionText={descriptionText}/>*/}
            <h3>LIST OF SUBBREEDS</h3>
            <div className={'sub-breeds-list'}>
                {/*<List breedsInfo={subBreedsInfo} />*/}
            </div>
        </div>
    );
};

export const BreedOverviewFooter = FooterHOC(BreedOverview);