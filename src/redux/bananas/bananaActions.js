import { BUY_BANANA } from './bananaTypes';

// enforcing every change as an action lets us have a clear
// understanding of what's going on in the app

export const buyBanana = () => {
    return {
        type: BUY_BANANA
    }
}