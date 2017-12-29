import React from 'react';
import { Input } from 'antd';
import '../../res/styles/App.css';

// class SearchBar extends React.Component {
//     render() {
//         return (
//             <form>
//                 <Input type="text" placeholder="Search..." style={{ width:200,marginBottom:10 }}/>
//                 <p>
//                     <Input type="checkbox" />
//                     {' '}
//                     Only show products in stock
//                 </p>
//             </form>
//         );
//     }
// }

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
        this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
    }

    handleFilterTextInputChange(e) {
        this.props.onFilterTextInput(e.target.value);
    }

    handleInStockInputChange(e) {
        this.props.onInStockInput(e.target.checked);
    }

    render() {
        return (
            <form>
                <input
                  type="text"
                  placeholder="Search..."
                  value={this.props.filterText}
                  onChange={this.handleFilterTextInputChange}
                />
                <p>
                    <input
                        type="checkbox"
                        checked={this.props.inStockOnly}
                        onChange={this.handleInStockInputChange}
                    />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}

export default SearchBar;