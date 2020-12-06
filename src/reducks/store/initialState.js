/**
 * Storeの初期状態を管理
 * アプリに必要なstateを書いておく（必要に応じて追記）
 * exportすること
 */

/**
 * initialStateのkeyに応じてフォルダを構築していくと管理がしやすい！
 */

const initialState = {
    users: {
        isSignedIn: false,
        uid: '',
        username: ''
    },
    /**商品の状態を管理したい場合は、追加していけば良い */
    products: {}
}

export default initialState