import Memory from './Memory';

const processor = processBus => process => {
  console.log('CHIPSET: ', (new Date()).toLocaleTimeString(), process);
  const memory = Memory(processBus, commands);
  process.action(processBus);
};

export default processor;
