  const getRandomColour = (x) => {
    const colours = ['rgb(233,23,90)', 'rgb(241,100,42)','rgb(1,211,191)','rgb(102,11,177)','rgb(215,215,0)','rgb(30,30,250)'];
    const colours2 = ['rgb(255,63,130)', 'rgb(255,140,102)','rgb(41,251,231)','rgb(142,51,207)','rgb(255,255,40)','rgb(70,70,255)'];

    const backgroundColours = ['rgb(252,208,207)','rgb(253,251,213)','rgb(213,251,200)','rgb(219,250,255)','rgb(236,211,253)'];

    let colourIndex = 0

    if(x == 1){
      
      colourIndex = Math.ceil(Math.random() * colours.length );
      console.log(colourIndex-1)
      return {colour1: colours[colourIndex-1], colour2: colours2[colourIndex-1]}
    }else{
      colourIndex = Math.ceil(Math.random() * backgroundColours.length );
      return backgroundColours[colourIndex-1];
    } ;
  }

  const getRandomShape = () => {
    const shapes = ['circle', 'rectangle'];
    const shapeIndex = Math.ceil(Math.random() * shapes.length);

    return shapes[shapeIndex-1];
  }
  const createShape = (shapeName) => {
    const lowShapeName = shapeName.toLowerCase();
    const shapeElement = document.createElement('DIV');
    const {colour1, colour2} = getRandomColour(1);
   
    //Get window height and width
    const winHeight = window.innerHeight;
    const winWidth = window.innerWidth;

    maxVal = Math.min(winHeight, winWidth)*0.4;
    minVal = 50;

    //FOr rectangles, get random number from minVal and 40% of window's shorter side
    const size1 = Math.floor(Math.random() * maxVal + minVal);
    const size2 = Math.floor(Math.random() * maxVal + minVal);

      //For circles, get random number from minVal and 30% of window's shoerter side
    const size3 = Math.floor(Math.random() * maxVal + minVal);
    //Get a random rotation
    const rot = Math.random() * 360;

    //Change opacity level
    shapeElement.style.opacity=0.9;
    switch(lowShapeName){
      case 'circle':
        shapeElement.style.background = `radial-gradient(circle at 50px 50px,${colour1}, #111`;
        shapeElement.style.width = `${size3}px`;
        shapeElement.style.height = `${size3}px`;
        shapeElement.style.borderRadius = '50%';
        break;
      case 'rectangle':
        shapeElement.style.background = `linear-gradient(to right, ${colour1}, ${colour2}, ${colour1})`;
        shapeElement.style.width = `${size1}px`;
        shapeElement.style.height = `${size2}px`;
        break;
      case 'triangle':
        shapeElement.style.width = 0;
        shapeElement.style.height = 0;
        shapeElement.style.borderLeft = `${size1}px solid transparent`;
        shapeElement.style.borderRight = `${size1}px solid transparent`;
        shapeElement.style.borderBottom = `${size1*2}px solid ${colour}`;
        shapeElement.style.transform = `rotate(${rot}deg)`
        break;
      
    }
    return shapeElement;
  }


  const changeBackground = () => {
    const wrapperDiv = document.querySelector('.wrapper-holder');
    wrapperDiv.style.backgroundColor = getRandomColour(0);

    //Create instances of a shape with random dimensions and located randomly
    const shape = getRandomShape();
    console.log(shape)
    var shapeEle = null;
    const numShapes = 25;

    //Get a random location for the shape
    //window is divided in a grid of equal number of rows and columns. A shape will be added to each square of grid. 
    const rowCol = Math.floor(Math.sqrt(numShapes))

    //Window is divided in a grid of rows and columns and a shape is placed randomly somewhere in a grid square
    let rowLen=0, colLen = 0;
    let loc1=0, loc2 = 0;
    let size=0;
    for(let i=0; i<rowCol; i++){
      rowLen = i*100/rowCol;
      loc1 = Math.random() * rowLen;

      for(let j=0; j<rowCol; j++ ){
        colLen = j*100/rowCol;
        loc1 =  Math.random() * 100/rowCol + rowLen - 50/rowCol;
        loc2 = Math.random() * 100/rowCol + colLen - 50/rowCol;
      
        shapeEle = createShape(shape);
        shapeEle.style.position = 'absolute';
        shapeEle.style.top = `${loc1}%`;
        shapeEle.style.left = `${loc2}%`;

        wrapperDiv.insertBefore(shapeEle, wrapperDiv.childNodes[0]);
      }
    }
}
changeBackground();