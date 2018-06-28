import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Demo from './Key';

const styles = theme => ({

    bootstrapInput: {
        minWidth: '40px',
        marginLeft: '2px',
        marginRight: '2px',
        marginBottom: '5px',
        display:'flex',
      borderRadius: 3,
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      fontSize: 24,
      textAlign: 'right',
      height: 36,
     flexBasis: 'calc(50% - 24px)',
     flexGrow: 0.5,
     flexShrink:0.5,
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      fontFamily: [
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ].join(','),
      '&:focus': {
        borderColor: '#ff3d00',
      },
    },
    bootstrapFormLabel: {
      fontSize: 18,
    },

    newbutton: {
        /*background: '#FF5722',*/
        borderRadius: 3,
        border: 2,
        height: 40,
        textSize: 14,
        flexBasis: '100%',
        displat: 'flex',
        color: 'white',

    },
    flexbutton:{
        flexBasis: 'calc(50% - 24px)',
        flexGrow: 0.5,
        flexShrink: 0.5,
        marginLeft: '2px',
        marginRight: '2px',
        marginBottom: '5px',
        display: 'flex',
    },

    styling:{
        background: '#F1F1F1',
        display: 'flex',
        height: '100%',
    },
    
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      flex:1,
      alignItems: 'center',
      justyfyContent: 'cpace-around',
      marginLeft: '20px',
      marginRight: '20px',
      marginTop: '20px',
      marginBottom: '20px',
    },
    flexchield:{
        flexBasis: '20%',
        flexGrow: 1,
        flexShrink: 0,
        background: 'white',
        textAlign: 'center',
        height: '36px',
        paddingTop: '6px',
        marginLeft: '2px',
        marginRight: '2px',
        marginTop:'2px',
        marginBottom: '2px',
        fontSize: 24,
        borderRadius: 2,
    }
  });

class Numbers extends Component {
   
    render(){
    const { classes } = this.props;
   


        return (
            <div className={classes.styling}>
            <div className={classes.container}>
        
        <input
                type="number" inputMode='number' className={classes.bootstrapInput}
         />
         <div className={classes.flexbutton}>
        <Button disabled variant="contained"  color="white" className={classes.newbutton}>                Добавить
          </Button>
          </div>
        <div className={classes.flexchield}>
            7
        </div>
        <div className={classes.flexchield}>
            8
        </div>
        <div className={classes.flexchield}>
            9
        </div>
        <div className={classes.flexchield}>
            +
        </div>
        <div className={classes.flexchield}>
            4
        </div>
        <div className={classes.flexchield}>
            5
        </div>
        <div className={classes.flexchield}>
            6
        </div>
        <div className={classes.flexchield}>
            -
        </div>
        <div className={classes.flexchield}>
            1
        </div>
        <div className={classes.flexchield}>
            2
        </div>
        <div className={classes.flexchield}>
            3
        </div>
        <div className={classes.flexchield}>
            *
        </div>
        <div className={classes.flexchield}>
           $
        </div>
        <div className={classes.flexchield}>
            0
        </div>
        <div className={classes.flexchield}>
            ,
        </div>
        <div className={classes.flexchield}>
            /
        </div>
        
        
         
            </div>
            </div>
        );
    
}
};
Numbers.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Numbers);


 
