// 模拟数据
const express = require('express')
const app = express()
//全球关于新病数据
var dxyareaallList = require('./src/data/DXYAreaall.json')
//丁香园新闻数据
var dxynewsList = require('./src/data/DXYNews.json')
//丁香园总共患病，治愈，感染，死亡等数据
var dxyoverallList = require('./src/data/DXYOverall.json')
//丁香园对谣言回应的数据
var dxyrumorsList = require('./src/data/DXYRumors.json')
//API路径
var apiRoutes = express.Router()
app.use('/api', apiRoutes)

module.exports = {
  devServer: {
    host: 'localhost',
    port: 8000,
    https: false,
    open: true,
    hotOnly: true,
    before(app) {
      app.get('/api/area', (req, res) => {
        res.json({
          code: 1,
          msg: '成功',
          data: dxyareaallList
        })
      })

      app.get('/api/news', (req, res) => {
        res.json({
          code: 1,
          msg: '成功',
          data: dxynewsList
        })
      })

      app.get('/api/overall', (req, res) => {
        res.json({
          code: 1,
          msg: '成功',
          data: dxyoverallList
        })
      })

      app.get('/api/rumors', (req, res) => {
        res.json({
          code: 1,
          msg: '成功',
          data: dxyrumorsList
        })
      })
    }
  }
}
