import React from 'react';
import PropTypes from 'prop-types';
import { withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        background: '#FF5722',
        borderRadius: 3,
        border: 2,
        color: 'white',
        height: 26,
        flexBasis: 0.5,
        flexGrow: 1,
        flexShrink: 0,
        display: 'flex',

    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justyfyContent: 'center',
      alignItems: 'center',
      
    },
    
    cssFocused: {},
    bootstrapRoot: {
      padding: 0,
      'label + &': {
        marginTop: theme.spacing.unit * 3,
      },
    },
    bootstrapInput: {
        display:'flex',
      borderRadius: 3,
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      fontSize: 16,
      textAlign: 'center',
      height: 32,
     flexBasis: 0.5,
     flexGrow: 1,
     flexShrink:0,
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
  });





function Demo (props) {
    const { classes } = props;


        return (
            <div>
        <form className={classes.container}>
           
            <input
                type="number" inputMode='number' className={classes.bootstrapInput}
                 />
                    <Button type='sumbit' className={classes.button}>Добавить
                </Button>
               
            </form>
         
            </div>
        );
    
}
Demo.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Demo);



 /* <MuiThemeProvider theme={theme}>
        <FormControl className={classes.margin}>
              <TextField
        defaultValue="react-bootstrap"
        label="Дабавить"
        id="bootstrap-input"
        InputProps={{
          disableUnderline: true,
          classes: {
            root: classes.bootstrapRoot,
            input: classes.bootstrapInput,
          },
        }}
        InputLabelProps={{
          shrink: true,
          className: classes.bootstrapFormLabel,
        }}
      />
      </FormControl>
              </MuiThemeProvider>*/