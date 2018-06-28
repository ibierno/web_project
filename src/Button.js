import React, { Component} from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';



const style = {
    Button: { background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    marginTop: 50,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)'},
    };

 class App extends Component {
    render () {
        return (
            <div>
                <Button component={Link} to='/newpage' variant="contained" style={style.Button}>
                Hello!
                </Button>
            </div>
        );
    };
}
export default App
