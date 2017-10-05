// ไฟล์นี้เอาไว้ติดต่อกับฐานข้อมูล
const storage = [
    { id: 1, email: 'admin@abc.com', password: '1234', role: 'admin'},
    { id: 2, email: 'user@abc.com', password: '1234', role: 'user'}
]
module.exports = {
  findByEmail: (email) => new Promise((resolve, reject) => {
    const rs = storage.find((x) => x.email === email)
    if (!rs) {
      reject('user is not found')
      return
    }
    resolve(rs)
  })
}
