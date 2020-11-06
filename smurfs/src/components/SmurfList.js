import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {fetchSmurf} from "../actions/index"

const SmurfList = (props) => {
    useEffect(()=>{
        props.fetchSmurf();
    },[])

    return (
        <div>
            <p>{/*console.log(props.smurfData)*/}</p>
            {props.isLoading ? <p>Loading smurfs data...</p> : null}
            <p>{props.smurfData.map((item)=>(
                <div>
                    <p>Name: {item.name} Age:{item.age} Height:{item.height}</p>
                </div>
            ))}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    
    return {
        isLoading: state.isLoading,
        smurfData: state.smurfData,
        
    }
}

export default connect(mapStateToProps,{fetchSmurf})(SmurfList);
