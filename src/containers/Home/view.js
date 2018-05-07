import React from "react";
import {Greeting} from "../../components/Greeting";
import {breedsInfo} from "../../configs/config";
import {List} from "../../components/List";
import {Description} from "../../components/Description";
import {text} from "../../configs/config";

 class Home extends React.Component{
     componentWillMount() {
         this.props.loadData();
     };

     render(){
         const {breedList} = this.props;
         return (
             <div>
                 <Greeting greeting="user" />
                 <Description text={text}/>
                 <h3>LIST OF BREEDS</h3>
                 <List breedsInfo={breedsInfo} />
             </div>
         );
     }
}

export default Home;
