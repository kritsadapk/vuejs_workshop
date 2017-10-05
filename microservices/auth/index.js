//มึน ๆ หน่อยๆ ตามไม่ทันแล้วครับอาจารย์ 
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const users = require('./user')
const refreshTokens = require('./refresh_token')

const generateRefreshToken = () => {
    return crypto.randomBytes(32).toString('base64')
    //use cypto random  
}
const generateAccessToken = (userId, scope,  expireIn) =>  
 //generate jwt
 jwt.sign(
     { type: 'access_token', userId, scope }, 
     'secret', 
     { expireIn, algorithm: 'HS256' })

const tokenWithPassword = (email, password, scope) => {
  users.findByEmail(email)
    .then((user) => {
        //check password //ยรหัสผ่านเข้ารหัส
        if (user.password !== password) throw 'email or password is wrong'
        if (user.role !== scope) throw 'forbidden'
        const refreshToken = generateAccessToken(user.id, scope, 0)
        // const refreshToken = generateToken(user.id, 0)
        return refreshTokens.create({userId: user.id, refreshToken, scope}) 
    })
    .then (() => { 
        const accessToken = generateToken('access_token', user.id, 60)
        return {
            refresh_token:  refreshToken,
            access_token: accessToken,
            expire_in: expireIn,
            user_id: user.id,
            token_type: 'bearer'
        }
    })
}

const tokenWithRefreshToken = (refreshToken) => {
  refreshTokens.find(refreshToken)
   .then((refreshToken) => { 
    const accessToken = generateAccessToken(user.id,scope, 60)
    return {
        access_token: accessToken,
        expire_in: expireIn,
        user_id: refreshToken.userId,
        token_type: 'bearer'
    }
   })
}

const revoke = (refreshToken) => {
  refreshTokens.remove(refreshToken)
}

module.exports = {
    tokenWithPassword,
    tokenWithRefreshToken,
    revoke
}
