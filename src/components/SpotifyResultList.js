import React from 'react'
import axios from 'axios'
import SpotifyResult from './SpotifyResult'

class SpotifyResultList extends React.Component {
    render(){
        return(
            <div>
                {this.props.results.map( result =>
                    <SpotifyResult result={result}/>)
                }
            </div>
        )
    }
}

export default SpotifyResultList;