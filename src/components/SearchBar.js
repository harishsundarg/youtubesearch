import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {term:''}
    }
    onInputChange =(e)=>{
        this.setState({term:e.target.value});
    }
    onFormSubmit = (e) =>{
        e.preventDefault();

        this.props.onFormSumbit(this.state.term);

        // To do call back from parent component
    };
    render(){
        return (
            <div className="ui segment search-bar">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text"  onChange={this.onInputChange} value={this.state.term}/>
                    </div>
                </form>
            </div>
        );
    }
}


export default SearchBar;