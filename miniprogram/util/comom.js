const app = getApp();
export const checkLogin=()=>{
    const Token=app.globalData.Token;
    console.log(Token);
    if(Token==null)
        return false;
    else
        return true;
}