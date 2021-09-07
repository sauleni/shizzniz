
import * as ACTIONS from '../../constants';

export const  resetPasswordAction = (value) => {

    //console.info("resetPasswordAction");
    //console.info(value);
    //console.info("resetPasswordAction");
    return {
    type: ACTIONS.RESET_PASSWORD_CRYODEX,
    payload: value
    }
};


