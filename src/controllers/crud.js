// const coords = require('../public/js/main.js');
const { query } = require('../database/db');
const conexion = require('../database/db');

exports.saveevent = (req,res)=>{

    const iduser = req.body.iduser;
    const name = req.body.name;
    const locationname = req.body.locationname;
    const date = req.body.date;
    const price = req.body.price;
    const typeid = req.body.typeid ;
    const description = req.body.description;
    const image = req.file.filename;
    const Coordlat = req.body.Coordlat;
    const Coordlng = req.body.Coordlng;

    
    conexion.query('INSERT INTO event SET ?', {name:name, locationname:locationname, date: date ,price: price, description: description,
                                                image: image, Coordlat: Coordlat, Coordlng: Coordlng,
                                                typeid: typeid, Usercreatorid: iduser , StateId: 1}, (error, results) =>{
        if(error){
            console.log('error :>> ', error);
        }else{
            res.redirect('/index');
        }
    });

}

exports.saveuser = (req,res)=>{

    const name = req.body.name;
    const surname = req.body.surname;
    const email = req.body.email;
    const password = req.body.password;
    const fnac = req.body.fnac;
    const rut = req.body.rut;
    const phone = req.body.phone;

    
    conexion.query('INSERT INTO user SET ?', {name:name, surname:surname, email: email , password: password, fnac: fnac,
                                                rut: rut, phone: phone, userlevelid: 2}, (error, results) =>{
        if(error){
            console.log('error :>> ', error);
        }else{
            res.redirect('/index');
        }
    });

}

exports.updateuser = (req,res)=>{

    const IdUser = req.body.iduser;
    const name = req.body.name;
    const surname = req.body.surname;
    const email = req.body.email;
    const password = req.body.password;
    const rut = req.body.rut;
    const phone = req.body.phone;
    const userlevelid = req.body.userlevelid;
    
    conexion.query('UPDATE user  SET ? WHERE IdUser = ?', [{name:name, surname:surname, email:email, password:password, rut:rut, phone:phone, userlevelid:userlevelid},  IdUser], (error,results)=>{
            if(error){
                console.log('error :>> ', error);
            }else{
                res.redirect('/useradmin');
            }
    });
}

exports.inhabilitaruser = (req,res)=>{

    const IdUser = req.body.iduser;
    
    conexion.query('UPDATE user  SET ? WHERE IdUser = ?', [{UserLevelId: 3},  IdUser], (error,results)=>{

            if(error){
                console.log('error :>> ', error);
            }else{
                res.redirect('/useradmin');
            }
    });
}

exports.revisionevent = (req,res)=>{

    const IdEvent = req.body.IdEvent;
    const revision = req.body.revision;
    const state = req.body.state;
    console.log('IdEvent :>> ', IdEvent);

    conexion.query('INSERT INTO revision SET ?', [{revision: revision, EventId: IdEvent}], (error,results)=>{


    });
    

    conexion.query('UPDATE event  SET ? WHERE IdEvent = ?', [{StateId: state},  IdEvent], (error,results)=>{
            if(error){
                console.log('error :>> ', error);
            }else{
                res.redirect('/eventAdminList');
            }
    });
}
exports.updateEvent = (req,res)=>{

    const id = req.body.id;
    const name = req.body.name;
    const locationname = req.body.locationname;
    const description = req.body.description;
    const date = req.body.date;
    const price = req.body.price;
    const type = req.body.typeid;
    const lat = req.body.Coordlat;
    const lng = req.body.Coordlng;
    
    //TODO
    conexion.query('UPDATE event  SET ? WHERE IdEvent = ?', [{Name:name, LocationName: locationname, Date:date, description:description, Price:price, CoordLat: lat, CoordLng: lng, TypeId: type, StateId: 1},  id], (error,results)=>{
            
        
        if(error){
                console.log('error :>> ', error);
            }else{
                res.redirect('/myevents');
                
            }
    });
}

exports.paymentcomplete = (req,res) =>{

    const id = req.body.id;
    conexion.query('UPDATE event SET ? WHERE IdEvent = ?', [{StateId: 2},  id], (error,results)=>{
            
        
        if(error){
                console.log('error :>> ', error);
            }else{
                res.redirect('/myevents');
                
            }
    });

}