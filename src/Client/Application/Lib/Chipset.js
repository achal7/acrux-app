import Bus from './Bus';
import Processor from './Processor';

const Chipset = (stream, commands) => {  
  const bus = Bus(stream, commands, command => command.action != undefined);
  const processor = Processor(bus);
  bus.subscribe(process => processor(process));
};

export default Chipset;
