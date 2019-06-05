import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './NumberInput.scss';

export class NumberInput extends Component {
  static propTypes = {
    onNext: PropTypes.func.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    prefix: PropTypes.string,
  };

  static defaultProps = {
    prefix: '',
  };

  constructor(props) {
    super(props);
    this.state = {amount: '', showMessage: false};
  }

  handleChange = (event) => {
    this.setState({
      amount: parseInt(event.target.value) || '',
      showMessage: false
    });
  };

  onClick = () => {
    const {amount} = this.state;
    const {min, max, prefix} = this.props;

    if (amount < min || amount > max) {
      this.setState({showMessage: true});
      return;
    }

    this.props.onNext(`${amount} ${prefix}`);
  };

  render() {
    const {min, max} = this.props;
    const buttonClass = this.state.showMessage ? 'LoanAmount__next--disabled' : 'LoanAmount__next';

    return (
      <div className="LoanAmount">
        <input name="amount" type="number" value={this.state.amount} onChange={this.handleChange}/>
        <button className={buttonClass} onClick={this.onClick}>Next</button>
        {
          this.state.showMessage &&
          <div className="LoanAmount__message">
            {`Enter between ${min} and ${max}`}
          </div>
        }
      </div>
    );
  }
}
