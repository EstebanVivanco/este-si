const express = require('express');
const router = express.Router();
const conexion = require('./database/db');

//Settings

router.get('/index',  (req, res)=>{

    conexion.query('SELECT event.IdEvent, event.Name, event.Locationname, event.Date, event.Price, event.Description, event.Image, event.CoordLat, event.CoordLng, event_type.Name AS NameV, event.UserCreatorId, event.StateId FROM event INNER JOIN event_type WHERE event.TypeId = event_type.IdEventType and event.StateId="2" order by event.date desc ', (error, results) => {

        if (error){
            throw error;            
        }else{
            res.render('index', {results: results, user: req.session.user});
        }
    });

})
router.get('/index/:cat',  (req, res)=>{

    const cat = req.params.cat;
    conexion.query('SELECT event.IdEvent, event.Name, event.Locationname, event.Date, event.Price, event.Description, event.Image, event.CoordLat, event.image, event.CoordLng, event_type.Name AS NameV, event.UserCreatorId, event.StateId FROM event INNER JOIN event_type On event.TypeId = event_type.IdEventType WHERE event.StateId="2" and event.TypeId = ?', [cat] , (error, results) => {

        if (error){
            throw error;            
        }else{
            res.render('index', {results: results, user: req.session.user});
        }
    });

})

router.get('/indec',  (req, res)=>{

    const names = req.query.names;
    
    conexion.query('SELECT event.IdEvent, event.Name, event.Locationname, event.Date, event.Price, event.Description, event.Image, event.CoordLat, event.image, event.CoordLng, event_type.Name AS NameV, event.UserCreatorId, event.StateId FROM event INNER JOIN event_type On event.TypeId = event_type.IdEventType WHERE event.StateId="2" and event.Name = ?',[names] , (error, results) => {

        if (error){
            console.log(' NADADANDNANDANANDADNADNANDNA');
            throw error;            
        }else{
            res.render('index', {results: results, user: req.session.user});
            console.log('results :>> ', results);
        }
    });

})



router.get('/events',  (req, res)=>{

    conexion.query('SELECT * FROM event_type', (error, results) => {

        if (error){
            throw error;            
        }else{
            res.render('events', {results: results, user: req.session.user});
                console.log({results: results});
        }
    });
})

router.get('/login',  (req, res)=>{

    res.render('login',({user:req.session.user}));
})

router.get('/logout',  (req, res)=>{

    req.session.destroy(function(err){
        console.log('error :>> ');
    });

    res.render('login')
})

//Ruta para mostrar el evento full
router.get('/fullevent/:id', (req, res) =>{

    const id = req.params.id;
    conexion.query('SELECT event.IdEvent, event.Name, event.Locationname, event.Date, event.Price, event.Description, event.Image, event.CoordLat, event.CoordLng, event_type.Name AS NameV, event.UserCreatorId, event.StateId FROM event INNER JOIN event_type WHERE event.TypeId = event_type.IdEventType and  event.IdEvent=?',[id], (error,results) => {
        if (error){
            throw error;            
        }else{
            res.render('fullevent', {eventini: results[0]});
            console.log({eventini: results[0]});
        }
    });

});


router.get('/eventDesicion/:id', (req, res) =>{

    const id = req.params.id;
    conexion.query('SELECT event.IdEvent, event.Name, event.Locationname, event.Date, event.Price, event.Description, event.Image, event.CoordLat, event.CoordLng, event_type.Name AS NameV, event.UserCreatorId, event.StateId FROM event INNER JOIN event_type WHERE event.TypeId = event_type.IdEventType and  event.IdEvent=?',[id], (error,results) => {
        if (error){
            throw error;            
        }else{
            res.render('eventDesicion', {eventini: results[0]});
        }
    });

});



router.get('/payment/:id', (req,res)=>{

    const id = req.params.id;

    conexion.query('SELECT * from event where IdEvent = ?', [id], (error, results) => {

        if (error){
            throw error;            
        }else{
            res.render('payment', {event: results[0]});
        }
    });
})


router.get('/index', (req,res)=>{
    res.render('index', ({ user: req.session.user}));
})
   
router.get('/user', (req,res)=>{
    res.render('user',({user:req.session.user}));
})

router.get('/eventAdminList', (req,res)=>{

    conexion.query('SELECT event.IdEvent, event.Name, event.LocationName, event.Date, event.Price, event.Description, event.Image, event.CoordLat, event.CoordLng, event_type.Name AS "Tipo", event_state.Name AS "Estado", user.Name AS "Solicitante" FROM event INNER JOIN event_type ON event.TypeId = event_type.IdEventType INNER JOIN event_state ON event_state.IdEventState = event.StateId INNER JOIN user ON event.UserCreatorId = user.IdUser', (error, results) => {

        if (error){
            throw error;            
        }else{
            res.render('eventAdminList', {results: results});
            console.log({results: results});
        }
    });
})

router.get('/myevents', (req,res)=>{

    const iduser = req.session.user;

    conexion.query('SELECT event.IdEvent, event.Name, event.LocationName, event.Date, event.Price, event.Description, event.Image, event.CoordLat, event.CoordLng, event_type.Name AS "Tipo", event_state.Name AS "Estado", user.Name AS "Solicitante" FROM event INNER JOIN event_type ON event.TypeId = event_type.IdEventType INNER JOIN event_state ON event_state.IdEventState = event.StateId INNER JOIN user ON event.UserCreatorId = user.IdUser where user.IdUser = ? ',[iduser], (error, results) => {

        if (error){
            throw error;            
        }else{
            res.render('myevents', {results: results, user: req.session.user});
        }
    });
})

router.get('/fullevent', (req,res)=>{
    res.render('fullevent');
})

router.get('/managment', (req,res)=>{
    res.render('managment');
})

router.get('/conocenos', (req,res)=>{
    res.render('conocenos', ({user: req.session.user}));
})

router.get('/errorcredenciales', (req,res)=>{
    res.render('errorcredenciales');
})

router.get('/useradmin', (req,res)=>{
    conexion.query('SELECT IdUser, Name, Surname, Email, Rut, Phone, UserLevelId FROM user', (error, results) => {

        if (error){
            throw error;            
        }else{
            res.render('useradmin', {results: results});
        }
    });
})

router.get('/useradminsearch', (req,res)=>{

    const namek = req.query.names;
    const names = ('%'+namek+'%')
    conexion.query('SELECT IdUser, Name, Surname, Email, Rut, Phone, UserLevelId FROM user WHERE Name LIKE ? ',[names], (error, results) => {

        if (error){
            throw error;            
        }else{
            res.render('useradmin', {results: results});
            console.log('results :>> ', results);
        }
    });

})

router.get('/useradmini', (req,res)=>{

    const idadm = req.query.idadm;

    conexion.query('SELECT IdUser, Name, Surname, Email, Rut, Phone, UserLevelId FROM user WHERE UserLevelId = ? ',[idadm], (error, results) => {

        if (error){
            throw error;            
        }else{
            res.render('useradmin', {results: results});
            console.log('results :>> ', results);
        }
    });

})



router.get('/useredit/:id', (req, res) =>{

    const id = req.params.id;
    conexion.query('SELECT * FROM user WHERE IdUser=?',[id], (error,results) => {
        if (error){
            throw error;            
        }else{
            res.render('useredit', {user: results[0]});
        }
    });



});
router.get('/inhabilitaruser/:id', (req, res) =>{

    const id = req.params.id;
    
    conexion.query('UPDATE user  SET ? WHERE IdUser = ?', [{UserLevelId: 3},  id], (error,results)=>{

            if(error){
                console.log('error :>> ', error);
            }else{
                res.redirect('/useradmin');
            }
    });



});

router.get('/eventadmin/:id', (req, res) =>{
    
    const id = req.params.id;
    const id2 = req.params.id;
    console.log('id', id)

    conexion.query('SELECT * FROM event, revision where event.IdEvent = ? and revision.EventId = ? ',[id,id2], (error,results) => {
        if (error){
            throw error;            
        }else{
            res.render('eventadmin', {event: results[0], user: req.session.user});

        }
    });

    
});

router.get('/eventadmin', (req, res) =>{
    
    res.render('eventadmin', {user: req.session.user});
    
});




const crud = require('./controllers/crud');
const login = require('./controllers/login');
router.post('/saveevent',crud.saveevent);
router.post('/saveuser', crud.saveuser);
router.post('/updateuser', crud.updateuser);
router.post('/revisionevent', crud.revisionevent);
router.post('/updateEvent', crud.updateEvent);
router.post('/paymentcomplete', crud.paymentcomplete);
router.post('/authy', login.authy);




module.exports = router;