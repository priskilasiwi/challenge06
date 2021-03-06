import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { authentication } from '../../firebase/firebaseConfig';

export const LoginGoogle = () => {
    return async (dispatch) => {
        const data = await signInWithPopup(
            authentication,
            new GoogleAuthProvider()
        );

        dispatch({ type: "SET_DATA_AUTH", payload: data });
        return data;
    };
};

export const LoginAdmin = (email, password) => {
    return (dispatch) => {
        dispatch({ type: "SET_DATA_AUTH", payload: { email, password }})
    };
};

export const RegistUser = (email, password) => {
    return (dispatch) => {
        dispatch({ type: "SET_DATA_AUTH", payload: { email, password }})
    }
}
