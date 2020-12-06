// Actionsの中身はプレーンなオブジェクト。Actionsで処理は行わない

export const SIGN_IN = 'SIGN _IN'
export const sginInActions = (userState) => {
    return {
        type: 'SIGN _IN',
        payload: {
            isSignedIn: true,
            uid: userState.uid,
            username: userState.username
        }
    }
}

export const SIGN_OUT = 'SIGN_OUT'
export const signOutAction = () => {
    return {
        type: 'SIGN_OUT',
        payload: {
            isSignedIn: false,
            uid: '',
            username: ''
        }
    }
}