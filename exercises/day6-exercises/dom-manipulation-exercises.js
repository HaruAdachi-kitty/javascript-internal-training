// Day 6: DOM操作演習

console.log('=== Day 6: DOM操作演習 ===');
console.log('ブラウザの開発者ツールでこのファイルを確認してください');
console.log('各関数を順番に実装していきましょう');

// 演習1: 要素の選択
console.log('\n=== 演習1: 要素の選択 ===');

// 1-1. IDで要素を選択
function selectById(id) {
  // TODO: document.getElementById()を使って要素を取得してください
  // 引数: id (string) - 取得したい要素のID
  // 戻り値: HTMLElement または null
}

// 1-2. クラス名で要素を選択（最初の一つ）
function selectByClass(className) {
  // TODO: document.querySelector()を使って最初の要素を取得してください
  // 引数: className (string) - 取得したい要素のクラス名
  // 戻り値: HTMLElement または null
  // ヒント: `.${className}`の形式でセレクタを指定
}

// 1-3. 複数要素を選択
function selectAllByClass(className) {
  // TODO: document.querySelectorAll()を使ってすべての要素を取得してください
  // 引数: className (string) - 取得したい要素のクラス名
  // 戻り値: NodeList
}

// 1-4. 複雑なセレクタで選択
function selectComplexSelector(selector) {
  // TODO: document.querySelector()を使って複雑なセレクタで要素を選択してください
  // 引数: selector (string) - CSSセレクタ（例: 'div.container > p:first-child'）
  // 戻り値: HTMLElement または null
}

// テスト用の要素が存在する場合のみ実行
if (document.getElementById('test-container')) {
  console.log('ID選択:', selectById('test-container'));
  console.log('クラス選択:', selectByClass('test-item'));
  console.log('複数クラス選択:', selectAllByClass('test-item'));
}

// 演習2: 要素の作成と追加
console.log('\n=== 演習2: 要素の作成と追加 ===');

// 2-1. 新しい要素を作成
function createElement(tagName, textContent, className) {
  // TODO: 新しい要素を作成し、テキストとクラスを設定してください
  // 引数: tagName (string) - 作成する要素のタグ名
  //       textContent (string) - 要素のテキスト内容
  //       className (string, optional) - 要素のクラス名
  // 戻り値: HTMLElement
  // 手順:
  // 1. document.createElement()で要素を作成
  // 2. textContentプロパティでテキストを設定
  // 3. classNameが指定されていればclassNameプロパティで設定
}

// 2-2. 要素を親要素に追加
function appendElement(parent, child) {
  // TODO: 子要素を親要素に追加してください
  // 引数: parent (HTMLElement) - 親要素
  //       child (HTMLElement) - 追加する子要素
  // 戻り値: なし
  // ヒント: appendChild()メソッドを使用
}

// 2-3. 要素を指定位置に挿入
function insertElement(parent, newElement, referenceElement) {
  // TODO: 新しい要素を参照要素の前に挿入してください
  // 引数: parent (HTMLElement) - 親要素
  //       newElement (HTMLElement) - 挿入する要素
  //       referenceElement (HTMLElement) - 参照要素
  // 戻り値: なし
  // ヒント: insertBefore()メソッドを使用
}

// 2-4. 動的リストの作成
function createList(items, parentId) {
  // TODO: アイテム配列からリストを作成して指定された要素に追加してください
  // 引数: items (Array) - リストアイテムの配列
  //       parentId (string) - 追加先要素のID
  // 戻り値: なし
  // 手順:
  // 1. document.getElementById()で親要素を取得
  // 2. 親要素が存在しない場合は早期リターン
  // 3. ul要素を作成
  // 4. itemsの各要素に対してli要素を作成しテキストを設定
  // 5. 各li要素をul要素に追加
  // 6. ul要素を親要素に追加
}

// テスト実行
const testItems = ['りんご', 'バナナ', 'オレンジ'];
// createList(testItems, 'fruit-container');

// 演習3: 属性の操作
console.log('\n=== 演習3: 属性の操作 ===');

// 3-1. 属性の設定
function setAttribute(element, attribute, value) {
  // TODO: 要素に属性を設定してください
  // 引数: element (HTMLElement) - 対象要素
  //       attribute (string) - 属性名
  //       value (string) - 属性値
  // 戻り値: なし
  // ヒント: setAttribute()メソッドを使用
}

// 3-2. 属性の取得
function getAttribute(element, attribute) {
  // TODO: 要素から属性を取得してください
  // 引数: element (HTMLElement) - 対象要素
  //       attribute (string) - 属性名
  // 戻り値: string または null
  // ヒント: getAttribute()メソッドを使用
}

// 3-3. data-*属性の操作
function setDataAttribute(element, dataKey, value) {
  // TODO: data-*属性を設定してください
  // 引数: element (HTMLElement) - 対象要素
  //       dataKey (string) - dataの後に続くキー名
  //       value (string) - 属性値
  // 戻り値: なし
  // ヒント: element.dataset[dataKey] = value を使用
}

function getDataAttribute(element, dataKey) {
  // TODO: data-*属性を取得してください
  // 引数: element (HTMLElement) - 対象要素
  //       dataKey (string) - dataの後に続くキー名
  // 戻り値: string または undefined
  // ヒント: element.dataset[dataKey] を使用
}

// 3-4. 画像の属性を一括設定
function setupImage(imgElement, src, alt, width, height) {
  // TODO: 画像要素に必要な属性をすべて設定してください
  // 引数: imgElement (HTMLImageElement) - img要素
  //       src (string) - 画像のURL
  //       alt (string) - 代替テキスト
  //       width (number) - 幅
  //       height (number) - 高さ
  // 戻り値: なし
  // 手順: src, alt, width, heightの各属性を設定
}

// 演習4: スタイルの操作
console.log('\n=== 演習4: スタイルの操作 ===');

// 4-1. 単一スタイルの設定
function setStyle(element, property, value) {
  // TODO: 要素のスタイルプロパティを設定してください
  // 引数: element (HTMLElement) - 対象要素
  //       property (string) - スタイルプロパティ名（キャメルケース）
  //       value (string) - スタイル値
  // 戻り値: なし
  // ヒント: element.style[property] = value を使用
}

// 4-2. 複数スタイルの一括設定
function setStyles(element, styles) {
  // TODO: スタイルオブジェクトを使って複数のスタイルを設定してください
  // 引数: element (HTMLElement) - 対象要素
  //       styles (Object) - スタイルプロパティと値のオブジェクト
  // 戻り値: なし
  // ヒント: Object.assign()またはforループを使用
  // 例: { color: 'red', backgroundColor: 'yellow' }
}

// 4-3. 要素の表示/非表示切り替え
function toggleDisplay(element) {
  // TODO: 要素の表示/非表示を切り替えてください
  // 引数: element (HTMLElement) - 対象要素
  // 戻り値: なし
  // 手順:
  // 1. 現在のdisplayスタイルをチェック
  // 2. 'none'の場合は'block'に、そうでなければ'none'に設定
}

// 4-4. アニメーション風のスタイル変更
function fadeIn(element, duration = 1000) {
  // TODO: 要素をフェードインさせてください
  // 引数: element (HTMLElement) - 対象要素
  //       duration (number) - アニメーション時間（ミリ秒）
  // 戻り値: なし
  // 手順:
  // 1. opacityを0に設定
  // 2. transitionを設定
  // 3. setTimeout()で少し待ってからopacityを1に設定
}

// 演習5: テキストとHTMLの操作
console.log('\n=== 演習5: テキストとHTMLの操作 ===');

// 5-1. テキストコンテンツの設定
function setTextContent(element, text) {
  // TODO: 要素のテキストコンテンツを設定してください
  // 引数: element (HTMLElement) - 対象要素
  //       text (string) - 設定するテキスト
  // 戻り値: なし
  // ヒント: textContentプロパティを使用
}

// 5-2. HTMLコンテンツの設定
function setInnerHTML(element, html) {
  // TODO: 要素のHTMLコンテンツを設定してください
  // 引数: element (HTMLElement) - 対象要素
  //       html (string) - 設定するHTML
  // 戻り値: なし
  // ヒント: innerHTMLプロパティを使用
  // 注意: XSS攻撃に注意してください
}

// 5-3. 安全なテキスト設定
function setSafeText(element, userInput) {
  // TODO: ユーザー入力を安全にテキストとして設定してください
  // 引数: element (HTMLElement) - 対象要素
  //       userInput (string) - ユーザーからの入力
  // 戻り値: なし
  // ヒント: HTMLタグを実行させないためtextContentを使用
}

// 5-4. テンプレート文字列でHTML生成
function createUserCard(user) {
  // TODO: ユーザー情報を使ってHTMLカードを生成してください
  // 引数: user (Object) - ユーザー情報 { name, age, department }
  // 戻り値: string - 生成されたHTML文字列
  // 手順:
  // 1. テンプレート文字列を使用
  // 2. user-cardクラスのdivでカードを作成
  // 3. name, age, departmentを含むHTML構造を生成
}

// テスト用データ
const testUser = { name: '田中太郎', age: 30, department: '開発部' };

// 演習6: クラスの操作
console.log('\n=== 演習6: クラスの操作 ===');

// 6-1. クラスの追加
function addClass(element, className) {
  // TODO: 要素にクラスを追加してください
  // 引数: element (HTMLElement) - 対象要素
  //       className (string) - 追加するクラス名
  // 戻り値: なし
  // ヒント: classList.add()メソッドを使用
}

// 6-2. クラスの削除
function removeClass(element, className) {
  // TODO: 要素からクラスを削除してください
  // 引数: element (HTMLElement) - 対象要素
  //       className (string) - 削除するクラス名
  // 戻り値: なし
  // ヒント: classList.remove()メソッドを使用
}

// 6-3. クラスの切り替え
function toggleClass(element, className) {
  // TODO: 要素のクラスを切り替えてください
  // 引数: element (HTMLElement) - 対象要素
  //       className (string) - 切り替えるクラス名
  // 戻り値: boolean - 追加されたかどうか
  // ヒント: classList.toggle()メソッドを使用
}

// 6-4. クラスの存在確認
function hasClass(element, className) {
  // TODO: 要素に指定されたクラスが存在するかチェックしてください
  // 引数: element (HTMLElement) - 対象要素
  //       className (string) - チェックするクラス名
  // 戻り値: boolean - クラスが存在するかどうか
  // ヒント: classList.contains()メソッドを使用
}

// 6-5. 複数クラスの操作
function setActiveState(element, isActive) {
  // TODO: isActiveの値に応じて'active'クラスを追加/削除してください
  // 引数: element (HTMLElement) - 対象要素
  //       isActive (boolean) - アクティブ状態にするかどうか
  // 戻り値: なし
  // ヒント: classList.toggle()の第二引数を使用
}

// 演習7: 要素の削除
console.log('\n=== 演習7: 要素の削除 ===');

// 7-1. 要素を削除
function removeElement(element) {
  // TODO: 要素を削除してください
  // 引数: element (HTMLElement) - 削除する要素
  // 戻り値: なし
  // ヒント: remove()メソッドを使用
}

// 7-2. 子要素をすべて削除
function removeAllChildren(parent) {
  // TODO: 親要素の子要素をすべて削除してください
  // 引数: parent (HTMLElement) - 親要素
  // 戻り値: なし
  // 方法1: innerHTML = '' を使用
  // 方法2: while (parent.firstChild) { parent.removeChild(parent.firstChild); }
}

// 7-3. 条件に基づいて要素を削除
function removeElementsIf(selector, condition) {
  // TODO: 条件を満たす要素を削除してください
  // 引数: selector (string) - 対象要素のセレクタ
  //       condition (Function) - 削除条件の関数
  // 戻り値: なし
  // 手順:
  // 1. querySelectorAll()で要素を取得
  // 2. forEachで各要素をチェック
  // 3. condition(element)がtrueの場合、要素を削除
}

// 演習8: 実践的なDOM操作
console.log('\n=== 演習8: 実践的なDOM操作 ===');

// 8-1. 動的テーブルの作成
function createTable(data, containerId) {
  // TODO: データ配列からテーブルを作成して指定された要素に追加してください
  // 引数: data (Array<Object>) - テーブルデータの配列
  //       containerId (string) - 追加先要素のID
  // 戻り値: なし
  // 手順:
  // 1. container要素を取得、存在しない場合は早期リターン
  // 2. table要素を作成
  // 3. thead要素を作成し、データの最初の要素のキーをヘッダーに使用
  // 4. tbody要素を作成し、各データ行をtr要素として追加
  // 5. テーブルをcontainerに追加
}

// 8-2. フォームの動的生成
function createForm(fields, containerId) {
  // TODO: フィールド定義からフォームを作成して指定された要素に追加してください
  // 引数: fields (Array<Object>) - フィールド定義の配列
  //       containerId (string) - 追加先要素のID
  // 戻り値: なし
  // fieldsの形式: [{ name: 'email', label: 'メール', type: 'email', required: true }]
  // 手順:
  // 1. container要素を取得、存在しない場合は早期リターン
  // 2. form要素を作成
  // 3. 各fieldに対してlabelとinput（またはtextarea）を作成
  // 4. 必要に応じてrequired属性を設定
  // 5. 送信ボタンを追加
  // 6. フォームをcontainerに追加
}

// 8-3. 検索フィルタ機能
function createSearchFilter(items, containerId) {
  // TODO: 検索フィルタ機能を実装してください
  // 引数: items (Array<string>) - 検索対象のアイテム配列
  //       containerId (string) - 追加先要素のID
  // 戻り値: なし
  // 手順:
  // 1. container要素を取得、存在しない場合は早期リターン
  // 2. 検索input要素を作成
  // 3. itemsからul + li要素のリストを作成
  // 4. inputのイベントリスナーを追加
  // 5. 入力値でアイテムをフィルタリング（部分一致）
  // 6. 検索欄とリストをcontainerに追加
}

// 8-4. アコーディオンメニューの作成
function createAccordion(sections, containerId) {
  // TODO: アコーディオンメニューを作成してください
  // 引数: sections (Array<Object>) - セクション定義の配列
  //       containerId (string) - 追加先要素のID
  // 戻り値: なし
  // sectionsの形式: [{ title: 'タイトル', content: 'コンテンツ' }]
  // 手順:
  // 1. container要素を取得、存在しない場合は早期リターン
  // 2. 各sectionに対してタイトル要素とコンテンツ要素を作成
  // 3. タイトルクリック時にコンテンツの表示/非表示を切り替え
  // 4. 一度に一つのセクションのみ開くように制御
  // 5. アコーディオンをcontainerに追加
}

// 演習9: パフォーマンスの最適化
console.log('\n=== 演習9: パフォーマンスの最適化 ===');

// 9-1. DocumentFragmentを使った最適化
function appendMultipleElements(parent, elements) {
  // TODO: DocumentFragmentを使って複数要素を効率的に追加してください
  // 引数: parent (HTMLElement) - 親要素
  //       elements (Array<HTMLElement>) - 追加する要素の配列
  // 戻り値: なし
  // 手順:
  // 1. document.createDocumentFragment()でフラグメント作成
  // 2. 各要素をフラグメントに追加
  // 3. フラグメントを親要素に一度だけ追加
}

// 9-2. 要素のキャッシュ
const ElementCache = {
  cache: {},

  get(selector) {
    // TODO: セレクタで要素を取得し、キャッシュに保存してください
    // 引数: selector (string) - CSSセレクタ
    // 戻り値: HTMLElement または null
    // 手順:
    // 1. キャッシュに要素が存在するかチェック
    // 2. 存在しない場合はquerySelector()で取得してキャッシュに保存
    // 3. キャッシュから要素を返却
  },

  clear() {
    // TODO: キャッシュをクリアしてください
    // 戻り値: なし
  },
};

// 9-3. 安全なDOM操作
function safeOperation(selector, operation) {
  // TODO: 要素の存在確認をしてから操作を実行してください
  // 引数: selector (string) - 対象要素のセレクタ
  //       operation (Function) - 実行する操作の関数
  // 戻り値: なし
  // 手順:
  // 1. querySelector()で要素を取得
  // 2. 要素が存在し、operationが関数の場合のみ実行
}

// 演習10: デバッグとエラーハンドリング
console.log('\n=== 演習10: デバッグとエラーハンドリング ===');

// 10-1. 要素の存在確認
function elementExists(selector) {
  // TODO: 要素が存在するかチェックしてください
  // 引数: selector (string) - CSSセレクタ
  // 戻り値: boolean - 要素が存在するかどうか
  // ヒント: querySelector()の結果がnullでないかチェック
}

// 10-2. エラーハンドリング付きDOM操作
function safeSetInnerHTML(element, html) {
  // TODO: try-catchを使って安全にHTMLを設定してください
  // 引数: element (HTMLElement) - 対象要素
  //       html (string) - 設定するHTML
  // 戻り値: boolean - 成功したかどうか
  // 手順:
  // 1. try-catch文を使用
  // 2. tryブロックでinnerHTMLを設定、成功時はtrueを返却
  // 3. catchブロックでエラーをコンソールに出力、falseを返却
}

// 10-3. DOM操作のログ記録
function logDOMOperation(operation, selector, details = {}) {
  // TODO: DOM操作のログを記録してください
  // 引数: operation (string) - 操作名
  //       selector (string) - 対象セレクタ
  //       details (Object) - 追加の詳細情報
  // 戻り値: なし
  // 手順:
  // 1. 現在のタイムスタンプを取得
  // 2. console.log()で操作情報を出力
  // 3. operation, selector, timestamp, detailsを含める
}

console.log('\n=== 実装のヒント ===');
console.log('1. 各関数を順番に実装していきましょう');
console.log('2. dom-practice.htmlと組み合わせて動作確認を行ってください');
console.log('3. ブラウザの開発者ツールでエラーを確認しながら進めてください');
console.log('4. わからない場合は解答ファイルを参考にしてください');

console.log('\n=== Day 6: DOM操作演習スタート！ ===');
