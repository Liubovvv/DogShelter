import React from 'react';
import {Greeting} from 'components/Greeting';
import {breedsInfo, text} from 'resources';
import {List} from 'components/List';
import {Description} from 'components/Description';
import {Image} from 'components/Image';


 class Home extends React.Component{
     componentWillMount() {
         this.props.loadData();
     };

     render(){
         const {
             ids,
             images
         } = this.props;
         return (
             <div>
                 <Greeting greeting="user" />
                 <Description text={text}/>
                 <Image images={images}/>
                 <h3>LIST OF BREEDS</h3>
                 <List breedsInfo={ids} />
             </div>
         );
     }
}

export default Home;
