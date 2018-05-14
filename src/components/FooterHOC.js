import React from 'react';
import Footer from 'components/Footer/Footer';

export const FooterHOC = (PassedComponent) => {
    class WithFooter extends React.Component {
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

    WithFooter.displayName = `WithFooter(${getDisplayName(PassedComponent)})`;
    return WithFooter;
};

function getDisplayName(PassedComponent) {
    return PassedComponent.displayName || PassedComponent.name || 'Component';
}


