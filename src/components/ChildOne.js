import React from 'react';
import ChildTwo from './ChildTwo';


function ChildOne ({isim,sehir}) {
    //const {isim} = props;

    return (
        <div>
            <p>Hosgeldiniz , {isim}</p>
            <ChildTwo sehir= {sehir}/>
        </div>

    )

}
export default ChildOne;