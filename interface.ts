interface rectangleOption{
    width:Number,
    height:number
}
var drawRectangle = (option:rectangleOption) =>{
    let width = option.width;
    let height = option.height;

    console.log(option)
}

drawRectangle({
    width:20,
    height:50
})