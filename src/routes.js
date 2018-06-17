import AddressForm from './components/AddressForm';
import Wizard from './components/Wizard';
import Disclaimer from './components/Disclaimer';
import ProveOwnership from './components/ProveOwnership';
import EnterEthereumAddress from './components/EnterEthereumAddress';
import SendTransaction from './components/SendTransaction';
import LastStep from './components/LastStep';

export default [
    {
        component: Disclaimer,
        name: 'Home',
        path: '/',
    },
    {
        component: Wizard,
        name: 'wizard',
        path: '/wizard',
        children: [
            {
                component: AddressForm,
                name: 'wizard-step-1',
                path: '/enter-bitcoin-address',
            },
            {
                component: ProveOwnership,
                name: 'wizard-step-2',
                path: '/prove-ownership',
            },
            {
                component: EnterEthereumAddress,
                name: 'wizard-step-3',
                path: '/enter-ethereum-address',
            },
            {
                component: SendTransaction,
                name: 'wizard-step-4',
                path: '/send-transaction',
            },
            {
                component: LastStep,
                name: 'wizard-step-5',
                path: '/last-step',
            },
        ],
    },
];
