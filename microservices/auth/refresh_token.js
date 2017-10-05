// เก็บพวก refresh token  กรณี logout ให้ตอบ 200 ออกมาด้วย
let str = []
module.exports = {
  create: ({userId, refreshToken, scope}) => new Promise((resolve, reject) => {
    str.push({userId, refreshToken, scope, createAt: Date.now(), lastAccess: Date.now()})
    resolve()
  }),
  find: (refreshToken) => new Promise((resolve, reject) => {
    const rs = str.find((x) => x.refreshToken === refreshToken)
    if (!rs) {
      reject('refresh token not found')
      return
    }
    rs.lastAccess = Date.now()
    resolve(rs)
  }),
  remove: (refreshToken) => new Promise((resolve, reject) => {
    str = str.filter((x) => x.refreshToken !== refreshToken)
    resolve()
  })
}
