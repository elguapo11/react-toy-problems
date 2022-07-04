import React, { Component} from 'react';


export default class FilterString extends Component {
  constructor() {
    super(); 

    this.state = {
      unfilteredArray: ['James', 'Erica', 'Tyler'], 
      userInput: '', 
      filteredArray: [],
    }
  }
  
  render() {
    return 
      <div className='puzzleText'>
      <input className='inputline'/> 
      <button className='confirmationButton'/>
      <span className='resultsBox filterStringRB'></span>
      <h4>Filter String</h4>
      </div>
    }
}

