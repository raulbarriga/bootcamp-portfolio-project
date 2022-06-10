import React, { Component} from 'react'


class ListingsCards extends Component{
    constructor(props){
        super(props);
    }

    loopListings = () => {

        const { listingsData } = this.props

        if(listingsData === undefined || listingsData == 0){
            return "Sorry your filter did not match any listing."
        }

        return (listingsData.map((listing, index) => {
            return (
                
            )
        }))
            
    }

    render() {
            
        
    }
}