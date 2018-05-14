import React from 'react';

import { FooterHOC } from 'components/FooterHOC';
import { text } from 'store/domains/api';
import { LineBreak } from 'components/LineBreak';
import { IntroBlock } from './IntroBlock/IntroBlock';
import  BreedsBlock  from './BreedsBlock/BreedsBlock';


class Home extends React.Component{
    componentWillMount() {
     this.props.loadData(3);
    };
    render(){
     const { images } = this.props;

     return (
         <div>
             <IntroBlock
                 title="DogShelter"
                 image="https://images.dog.ceo/breeds/affenpinscher/n02110627_6670.jpg"
                 text={text}
             />
             <LineBreak />
             <BreedsBlock
                 title="Available Breeds"
                 images={images}
             />
         </div>
     )
    }
}

export const HomeFooter = FooterHOC(Home);