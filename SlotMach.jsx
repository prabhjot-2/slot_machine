import React from "react";

const SlotM=(props)=>{
    //let x= 'smile';
    //let y='smile';
    //let z='smile';

    //let x= props.x;
    //let y=props.y;
    //let z=props.z;

    let{x,y,z}=props;

    if((x===y)&& (y===z)){
        return (
            <>
                <div className="'slot_inner">
                <h1>
                    {x}{y}{z}
                </h1>
                <h1> this is matching </h1>
                <hr/>

                </div>
            </>
        );

    }

    else{
        return (
            <>
                <div className="'slot_inner">
                <h1>
                    {x}{y}{z}
                </h1>
                <h1> this is not  matching </h1>
                <hr/>

                </div>
            </>
        );
    }
}


export default SlotM;
