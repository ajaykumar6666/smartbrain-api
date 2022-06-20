const handleProfileGet = (req,res,db)=>{
    const {id}=req.params;
    let found=false;
    db.select('*').from('users').where({id:id}).then(user=>{
        if (user.length){
            res.json(user[0])
        }
    }).catch(err=>res.status(400).json('Not Foundd!'))
}

module.exports = {
    handleProfileGet:handleProfileGet
}