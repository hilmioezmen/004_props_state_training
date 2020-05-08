import React, {Component} from 'react';
import ChildOne from './ChildOne';
import ChildOneKardes from './ChildOneKardes';


class Parent extends Component {
    constructor (props) {
        super (props);
        this.state = {
            name :'Ahmet Yildiz',
            sehir :'Ankara',
            konu:'React ögreniyorum'

        }
    }
    
    inputStateAta = (newValue) => {
        this.setState ({
            konu: newValue
        })
    }   

    render () {
        return (
            <div>
                <ChildOneKardes  konu ={this.state.konu} inputGonder = {this.inputStateAta}/>
                <ChildOne isim = {this.state.name} sehir = {this.state.sehir}/>
                

            </div>
        )

    }

}
export default Parent;
