import React from 'react';
import Footer from './Footer';

export const FooterHOC = (PassedComponent) => {
    class Parent extends React.Component {
        render() {
            const{
                footerImages,
                getRandomFooterImages,
                ...extraProps
            } = this.props;

            return (
                <div>
                    <PassedComponent
                        {...extraProps}
                    />
                    <Footer
                        images={footerImages}
                        getRandomFooterImages={getRandomFooterImages}
                    />
                </div>
            );
        }
    }

    FooterHOC.displayName = `Parent(${getDisplayName(PassedComponent)})`;
    return Parent;
};

function getDisplayName(PassedComponent) {
    return PassedComponent.displayName || PassedComponent.name || 'Component';
}


