import React from 'react';
import Button from '@material-ui/core/Button';
import { CardContent, Grid, CardHeader, IconButton } from '@material-ui/core';

const styles = {
  button: {
    background: 'none',
    border: 2,
    color: '#FF5722',
    borderColor: '#FF5722',
  },
  buttonBlue: {
    background: '#FF5722',
    borderRadius: 3,
    border: 2,
    color: 'white',
    height: 26,
  },
  gridAdd: {
    display: 'grid',
    gridTemplateColumns: '100px 70px 50px',
    gridTemplateRows: '40px',
    gridGap: 20,
    marginTop: 12,
    marginLeft: 20,
  },
  text: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#3E3E3E',
  },
  buttons: {
    alignSelf: 'center',
  },
};

class incomeButton extends React.Component {
  state = {
    active_button: 'income',
  };

  constructor(props) {
    super(props);
    this.changeToIncome = this.changeToIncome.bind(this);
    this.changeToOutcome = this.changeToOutcome.bind(this);
  }

  changeToIncome(){
    this.setState(prevState => ({
        active_button: prevState.active_button ? 'income': 'outcome'
    }))
  }

  changeToOutcome(){
    this.setState(prevState => ({
        active_button: prevState.active_button ? 'outcome': 'income'
    }))
  }

  render() {
    return (
        <Grid width={50} gap={10} style={styles.gridAdd}>
          
          <div style={styles.text}>Добавить:
          </div>

          <Button
            name='Income'
            onClick={this.changeToOutcome}
            style={{
              ...styles.button,
              ...(this.state.active_button === 'outcome' ? styles.buttonBlue : {}),
            }}
          >
          {'Доход'}
          </Button>

          <Button
            name='Outcome'
            onClick={this.changeToIncome}
            style={{
              ...styles.button,
              ...(this.state.active_button === 'income' ? styles.buttonBlue : {}),
            }}
          >
          {'Расход'}
          </Button>

        </Grid>
 
    );
  }
}

export default incomeButton;