import axios from 'axios';
import fs from 'fs';

const BringHTML = async(URL: string, FileName: string) => {
  const response = await axios.get(URL);
  const html = response.data;  
  
  fs.writeFileSync(`./output/html/${FileName}.html`, html);
};

BringHTML('https://google.com/', 'test02'); 