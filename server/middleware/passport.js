const { User } = require('../models/user');


const  { Strategy:JwtStrategy,ExtractJwt } = require('passport-jwt');

const jwtOptions = {
    secretOrKey: process.env.SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
} 

const jwtVerify = async(payload,done)=>{
    try{
        const user = await User.findById(payload.userId);
        if(!user){
            return done(null,false)
        }
        done(null,user)
    } catch(error){
        done(error,false)
    }
}

const jwtStrategy = new JwtStrategy(jwtOptions,jwtVerify);

module.exports = {
    jwtStrategy
}