/* 

读取文件数据到es
使用: 
parseExcelKey: 表头要解析的字段，没定义的话，默认解析整个表头
esUrl: es地址
fileName: 文件名，以当前项目文件为相对路径

 */



const axios = require('axios').default;
const xlsx = require('node-xlsx').default;

function parseExcel (fileName, keys) {
  const workSheetsFromFile = xlsx.parse(`${__dirname}/${fileName}`);
  const data = workSheetsFromFile[0]['data'];
  const head = data.shift().join(',').split(',')
  return data.map( one => {
    const itemValue = {};
    head.forEach((item, index) => {
      if (keys.length && keys.indexOf(item) > -1) {
        itemValue[item] = one[index];
      } else {
        itemValue[item] = one[index]
      }
    })
    itemValue['time'] = Date.now();
    return itemValue;
  })
}


function insertElasticSearchDoc ( url, data) {
  data.time = Date.now()
  return axios.post(url, data)
}

// 可以优化的地方，设置为分批
function start (url, data) {
  Promise.all(data.map(item => {
    return insertElasticSearchDoc(url, item);
  }))
  .then(result => {
    console.log('insert done!');
  })
}

const parseExcelKey = ['question', 'answing'];
const fileName = "testData.xlsx"
const esUrl = "http://localhost:9200/question_answering_search/_doc"

const mockData = parseExcel(fileName, parseExcelKey);

start(url, mockData);