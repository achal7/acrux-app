import Memory from './Memory';

const processor = processBus => process => {
  //console.log('CHIPSET: ', (new Date()).toLocaleTimeString(), process);
  process.action(processBus);
};

export default processor;
