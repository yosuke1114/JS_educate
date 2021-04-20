// console.log("index.js: loaded");
// // CSSセレクタを使ってDOMツリー中のh2要素を取得する
// const heading = document.querySelector("h2");
// // h2要素に含まれるテキストコンテンツを取得する
// const headingText = heading.textContent;

// // button要素を作成する
// const button = document.createElement("button");
// button.textContent = "Push Me";
// // body要素の子要素としてbuttonを挿入する
// document.body.appendChild(button);
//const userId = "任意のGitHubユーザーID";

// const userId = "js-primer-example";
async function main() {
    try {
        const userId = getUserId();
        const userInfo = await fetchUserInfo(userId);
        const view = createView(userInfo);
        displayView(view);
    } catch (error) {
        console.error(`エラーが発生しました (${error})`);
    }
}

function getUserId(){
    return document.getElementById("userId").value;
}

async function fetchUserInfo (userId) {
    const response = await fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`);
    //console.log(response.status);
    //エラーレスポンスを確認する
    if (!response.ok) {
        return Promise.reject(new Error(`${response.status}: ${response.statusText}`));
        //console.error("エラーレスポンス",response);
    } else {
        return response.json();
    }
}

function createView(userInfo){
    return escapeHTML`
    <h4>${userInfo.name} (@${userInfo.login})</h4>
    <img src="${userInfo.avatar_url}" alt="${userInfo.login}" height="100">
    <dl>
    <dt>Location</dt>
    <dd>${userInfo.location}</dd>
    <dt>Repositories</dt>
    <dd>${userInfo.public_repos}</dd>
    </dl>
    `;
}
// HTMLの挿入
function displayView (view) {
    const result = document.getElementById("result");
    result.innerHTML = view;    
}

function escapeSpecialChars(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
function escapeHTML(strings, ...values) {
    //console.log(strings);
    //console.log(values);
    return strings.reduce((result, str, i) => {
            // console.log("result" + result);
            // console.log("str" + str);
            // console.log("i" + i);
        const value = values[i - 1];
        if (typeof value === "string") {
            return result + escapeSpecialChars(value) + str;
        } else {
            return result + String(value) + str;
        }
    });
}
