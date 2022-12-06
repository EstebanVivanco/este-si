const conexion = require('../database/db');
const express = require('express');
const session = require('express-session'); 

const app = express();




exports.authy = (req,res)=>{

       
    const Email = req.body.Email;
    const password = req.body.password;


    if (Email && password) {
        
        conexion.query('SELECT * FROM user WHERE Email = ? and password = ? and UserLevelId = 2', [Email,password], (error,results)=>{

            if(error){
                console.log('error :>> ', error);

            }else{
                
                if (results.length > 0) {
                 
                    req.session.user = results[0].IdUser;
                    console.log(results[0].IdUser);
                    res.redirect('/index');
                    
                }

            }
        });

        conexion.query('SELECT * FROM user WHERE Email = ? and password = ? and UserLevelId = 1', [Email,password], (error,results)=>{

            if(error){
                console.log('error :>> ', error);
            }else{
                
                if (results.length > 0) {
                    
                    req.session.user = results[0].IdUser;
                    console.log(results[0].IdUser);
                    res.redirect('/managment');
                    
                }
                
            }
        });

    }
}

