import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

import Paper from '@material-ui/core/Paper';


const style = {
    paper: { 
        marginTop: 8,
        height: 56,
    },
    fieldset: {
        marginLeft: 20,
        marginTop: 4,
    }
};


class CheckboxesGroup extends React.Component {
  state = {
    gilad: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
      <Paper style={style.paper}>
      <FormControl style={style.fieldset} component="fieldset">
        <FormLabel component="legend"></FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.gilad}
                onChange={this.handleChange('gilad')}
                value="gilad"
              />
            }
            label="Собирать информацию из СМС"
          />
         
        </FormGroup>
        <FormHelperText></FormHelperText>
      </FormControl>
      </Paper>
    );
  }
}

export default CheckboxesGroup;
























// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import green from '@material-ui/core/colors/green';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';
// import Favorite from '@material-ui/icons/Favorite';
// import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
// import Paper from '@material-ui/core/Paper';

// const styles = {
//   root: {
//     color: green[600],
//     '&$checked': {
//       color: green[500],
//     },
//   },
//   checked: {},
//   size: {
//     width: 40,
//     height: 40,
//   },
//   sizeIcon: {
//     fontSize: 20,
//   },
// };

// class CheckboxLabels extends React.Component {
// //   state = {
// //     checkedA: true,
// //   };

// //   handleChange = name => event => {
// //     this.setState({ [name]: event.target.checked });
// //   };

//   render() {
//     // const { classes } = this.props;

//     return (
//       <FormGroup row>
//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={this.state.checkedA}
//               onChange={this.handleChange('checkedA')}
//               value="checkedA"
//             />
//           }
//           label="Secondary"
//         />

//       </FormGroup>
//     );
//   }
// }

// CheckboxLabels.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(CheckboxLabels);



// // class CheckboxLabels extends Component {
// //     render () {
// //         return (
// //             <div>
// //                 <Button component={Link} to='/newpage' variant="contained" style={style.Button}>
// //                 Hello!
// //                 </Button>
// //             </div>
// //         );
// //     };
// // }

