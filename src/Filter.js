import React, { Component } from 'react'

 class Filter extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="filter">
                    <div className="filter-results">{this.props.count? this.props.count : 0} Products</div>
                    <div className="filter-sort">Sort {" "}
                        <select value={this.props.sort} onChange={this.props.sortProducts}>
                            <option value="">Latest</option>
                            <option value="Lowest">Lowest</option>
                            <option value="Highest">Highest</option>
                        </select>
                    </div>
                    <div className="filter-size">Filter {" "}
                        <select value={this.props.size} onChange={this.props.filterProducts}>
                            <option value="">All</option>
                            <option value="X">X</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filter