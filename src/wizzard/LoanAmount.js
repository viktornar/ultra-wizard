import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './LoanAmount.scss';

export class LoanAmount extends Component {
  static propTypes = {
    onNext: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {amount: '', showMessage: false};
  }

  handleChange = (event) => {
    this.setState({
      amount: parseInt(event.target.value),
      showMessage: false
    });
  };

  onClick = () => {
    const {amount} = this.state;
    if (amount < 1000 || amount > 30000) {
      this.setState({showMessage: true});
      return;
    }

    this.props.onNext(amount);
  };

  render() {
    const buttonClass = this.state.showMessage ? 'LoanAmount__next--disabled' : 'LoanAmount__next';
    return (
      <div className="LoanAmount">
        <label htmlFor="amount">Loan amount:</label>
        <input name="amount" type="number" value={this.state.amount} onChange={this.handleChange}/>
        <button className={buttonClass} onClick={this.onClick}>Next</button>
        {
          this.state.showMessage &&
          <div className="LoanAmount__message">
            Enter between 1000 and 30000
          </div>
        }
      </div>
    );
  }
}
