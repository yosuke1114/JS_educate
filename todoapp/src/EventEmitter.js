export class EventEmitter {
    constructor() {
        // 登録する [イベント名, Set(リスナー関数)] を管理するMap
        this._listeners = new Map();
    }
    /**
     * 指定したイベントが実行されたときに呼び出されるリスナー関数を登録する
     * @param {string} type イベント名
     * @param {Function} listener イベントリスナー
     */
addEventListener(type, listener) {
    //指定したイベントに対応するSetを作成し、リスナー関数を登録する
    if (!this._listeners.has(type)){
        this._listeners.set(type, new Set())
    }
}
    /**
     * 指定したイベントをディスパッチする
     * @param {string} type イベント名
     */
emit(type){
    const listenerSet = this._listeners.get(type);
    if (!this.listenerSet) {
        return;
    }
    listenerSet.forEach(listener => {
        listener.call(this);
    })
}
    /**
     * 指定したイベントのイベントリスナーを解除する
     * @param {string} type イベント名
     * @param {Function} listener イベントリスナー
     */
    removeEventListener(type, listener) {
        const listenerSet = this._listeners.get(type);
        if (!listenerSet){
            return;
        }
        listenerSet.forEach(ownListener => {
            if (ownListener === listener){
                listenerSet.delete(listener);
            }
        });
    }
}