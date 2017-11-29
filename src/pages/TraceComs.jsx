import React from 'react';

import {PublicContainer,PublicComponent} from '../common/PublicComponent';

import ExtractData from '../components/ExtractData';

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

class Page1 extends PublicComponent {

    render() {

        return (
            <div>
                Page1
                <ExtractData />
            </div>
        )
    }
}

export default PublicContainer(mapStateToProps, mapDispatchToProps,Page1);
