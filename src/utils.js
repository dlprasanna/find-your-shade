function componenetToHex(c){
    var hex=c.toString(16);
    return hex.length==1?'0'+hex:hex;
}

function rgbToHex(r,g,b)
{
    return '#'+componenetToHex(r)+componenetToHex(g)+componenetToHex(b);
}
export default rgbToHex;
