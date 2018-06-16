import Disclaimer from './components/Disclaimer';
import Wizard1 from './components/wizard-1';

export default [
  { path: '/',  component: Disclaimer }, 
  { name: 'enter-bitcoin-address', path: '/enter-bitcoin-address', component: Wizard1 },
];
