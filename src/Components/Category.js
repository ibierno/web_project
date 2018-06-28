import React, { Component } from 'react'

const style = {
    all: {
        height: 64,
        padding: '0px',
        marginTop: '10px',
    },
    i1: {
        color: '#3E3E3E',
        float: 'left',
        fontSize: 16,
        marginLeft: 24,
        marginRight: 10,
        marginTop: 12,
    
    },     
    i2: {
        color: '#539B00',
        float: 'left',
        fontSize: 14,
        marginLeft: 16,
        marginRight: 10,
        marginTop: 11,
    },
    i3: {
        color: '#CB0000',
        float: 'left',
        fontSize: 14,
        marginLeft: 16,
        marginRight: 10,
        marginTop: 14,
    },
    i4: {
        color: '#888888',
        float: 'left',
        fontSize: 14,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 14,
    },
    i5: {
        color: '#888888',
        float: 'left',
        fontSize: 14,
        marginLeft: 10,
        marginRight: 24,
        marginTop: 11,
    }
    };

export default class Categories extends Component {
    render () {
        return (
            <div style={style.all}>
                <img style={style.i1} width='38' src='icon_other_orange_t.svg' alt=''/>
                <img style={style.i2} width='37' src='icon_eating_t.svg' alt=''/>
                <img style={style.i3} width='54' src='icon_transport_t.svg' alt=''/>
                <img style={style.i4} width='50' src='icon_health_t.svg' alt=''/>
                <img style={style.i5} width='37' src='icon_gkh_t.svg' alt=''/>
            </div>
        );
    };
}




















// import React, { Component, Fragment } from 'react';
// import Button from '@material-ui/core/Button';
// import { CardContent, Grid, CardHeader, IconButton } from '@material-ui/core';
// import './index.css';

// const styles = theme => ({
// //  all: {
// // display: 'grid',
// // gridTemplateColumns: '40px 40px 40px 40px 40px',
// // gridTemplateRows: '20px 20px',

// //  },
 
 
//     block: {
//     display: 'grid',
//     gridTemplateColumns: '60px 60px 60px 60px 60px',
//     // gridTemplateRows: '60px',
//     gridGap: 100,

//     marginLeft: 24,

//     // height: 60,
//   },
 
//   card: {
//     display: 'grid',
//     gridTemplateColumns: '56px',
//     gridTemplateRows: '32px 24px',
//     // gridGap: 0,
      
//     marginTop: 8,
//     marginLeft: 24,
//     width: 44,
//     height: 44,
//     // backgroundColor: 'green',
//   },
//  cat: {
//      width: 30,
//      height: 30,
//      marginLeft: 0,
//      marginRight: 0,
//  }
//   // text: {
//   //   fontSize: 8,
//   // },
// //   but: {
// //     borderColor: '#000066',
// //     borderWidth: 1,
// //     borderRadius: 10,
// //     backgroundColor: 'white',

// //     width: 56,
// //     height: 56,
// //   },
// //   buttonPress: {
// //     borderColor: '#000066',
// //     backgroundColor: '#000066',
// //     borderWidth: 1,
// //     borderRadius: 10,
// //   },
// //   activate: {
// //     fontSize: 20,
// //   }
//   // card1: {
//   //   width: 56,
//   //   height: 56,
//   // },
//   // card2: {
//   //   width: 56,
//   //   height: 56,
//   // },
//   // card3: {
//   //   width: 56,
//   //   height: 56,
//   // },
// })
    

// class Categories extends Component {
//   render(){
//     return(
//         <Grid width={300} gap={20} style={styles.all}>
// {/* <Button style={styles.cat}> */}
//             <img style={styles.image1} width='43' src='icon_other_orange_t.svg' alt=''/>
//             {/* <p style={styles.text}>Другое</p> */}
//             {/* </Button> */}

// {/* <Button> */}
//             <img style={styles.image2} width='59' src='icon_transport_t.svg' alt=''/>
//             {/* <p style={styles.text}>Досуг</p> */}
//             {/* </Button>
// <Button> */}
//             <img style={styles.image3} width='42' src='icon_eating_t.svg' alt=''/>
//             {/* <div style={styles.text}>Другое</div> */}
//             {/* </Button> */}

// {/* <Button> */}
//             <img style={styles.image4} width='55' src='icon_health_t.svg' alt=''/>
//             {/* <div style={styles.text}>Досуг</div> */}
//             {/* </Button> */}
// {/* <Button> */}
//             <img style={styles.image5} width='42' src='icon_gkh_t.svg' alt=''/>
// {/* </Button> */}
//         </Grid>



//     // //   <Grid width={300} gap={20} style={styles.block}>

//     //     // {/* <Button> */}
//     //       <div>
//     //       <Grid width={56} gap={0} style={styles.card}>
//     //         <img style={styles.image} width='32' src='icon_other_gray.svg' alt=''/>
//     //         <div style={styles.text}>Другое</div>
//     //       </Grid>
//     //     </div>,
//     //     // {/* </Button> */}

//     //     // {/* <button style={styles.but}> */}
//     //     //   {/* <div> */}
//     //       <div>
//     //       <Grid width={56} gap={0} style={styles.card}>
//     //         <img style={styles.image} width='32' src='icon_hobby.svg' alt=''/>
//     //         <div style={styles.text}>Досуг</div>
//     //       </Grid>
//     //       </div>,
//     //     //   {/* </div> */}
//     //     // {/* </button> */}
  
//     //     // {/* <button style={styles.but}> */}
//     //       <Grid width={56} gap={0} style={styles.card}>
//     //         <img style={styles.image} width='32' src='icon_bus.svg' alt=''/>
//     //         <div style={styles.text}>Транспорт</div>
//     //       </Grid>,
//     //     // {/* </button> */}

//     //     // {/* <button style={styles.but}> */}
//     //       <Grid width={56} gap={0} style={styles.card}>
//     //         <img style={styles.image} width='32' src='icon_bus.svg' alt=''/>
//     //         <div style={styles.text}>Еда</div>
//     //       </Grid>,
//     //     // {/* </button> */}

//     //     // {/* <button style={styles.but}> */}
//     //       <Grid width={56} gap={0} style={styles.card}>
//     //         <img style={styles.image} width='32' src='icon_bus.svg' alt=''/>
//     //         <div style={styles.text}>Связь</div>
//     //       </Grid>
//     //     // {/* </button> */}

//     // //   </Grid>
//     );
//   }
//   }


//   export default Categories;