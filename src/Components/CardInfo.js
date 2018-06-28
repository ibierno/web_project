import React, { Component } from "react";

 class Categories extends Component{
    constructor( ){
        super();
        this.state={
            categories: [
                {
                    tittle:'food',
                    image:'icon_food',
                    dealing: 'outcomes',
               },
               {
                    tittle:'clothes',
                    image:'icon_clothes',
                    dealing: 'outcomes',
               },
               {
                    tittle:'communication',
                    image:'icon_communication',
                    dealing: 'outcomes',
               },
               {
                    tittle:'health',
                    image:'icon_health',
                    dealing: 'outcomes',
               },
               {
                    tittle:'transport',
                    image:'icon_transport',
                    dealing: 'outcomes',
               },
               {
                   tittle:'gkh',
                   image:'icon_gkh',
                   dealing: 'outcomes',
              },
               {
                    tittle:'job',
                    image:'icon_job',
                    dealing: 'incomes',
               },
               {
                    tittle:'stipend',
                    image:'icon_stipend',
                    dealing: 'incomes',
               },
               {
                   tittle:'otheroutcomes',
                   image:'icon_other',
                   dealing: 'outcomes',
               },
               {
                   tittle:'otherincomes',
                   image:'icon_other',
                   dealing: 'incomes',
               },
           ]
        }
    }
 };

 class CardInfo extends Component{
    constructor( ){
        super();
        this.state={
            cardinfo: [
                {
                    id:'1',
                    categoryimage:'icon_food',
                    categoryname:'food',
                    categorydealing:'outcomes',
                    money:'100 rubels',
                    date:'12.01.17',
                },
                {
                    id:'2',
                    categoryimage:'icon_clothes',
                    categoryname:'clothes',
                    categorydealing:'outcomes',
                    money:'5000 rubels',
                    date:'02.01.17',
                },
                {
                    id:'3',
                    categoryimage:'icon_gkh',
                    categoryname:'gkh',
                    categorydealing:'outcomes',
                    money:'8000 rubels',
                    date:'15.02.17',
                },
                {
                    id:'4',
                    categoryimage:'',
                    categoryname:'job',
                    categorydealing:'incomes',
                    money:'55000 rubels',
                    date:'15.02.17',
                },
                {
                    id:'5',
                    categoryimage:'icon_other',
                    categoryname:'other',
                    categorydealing:'outcomes',
                    money:'15000 rubels',
                    date:'15.02.17',
                },

            ]
                
        }
    }
 };
export default CardInfo;