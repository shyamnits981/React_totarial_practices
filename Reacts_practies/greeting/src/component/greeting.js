import React from 'react'


const Greeting = () => {


    // let curDate = new Date(2022, 9, 9, 22);
    let curDate = new Date( );
    curDate = curDate.getHours();
    let greeting = "";

    let cssStyle = { };


    if (curDate >= 1 && curDate < 12) {
        greeting = 'Good Morning';
        cssStyle.color = 'green'
    } else if (curDate >= 12 && curDate < 20) {
        greeting = "Good afternoon";
        cssStyle.color = 'red'
    } else {
        greeting = "Good Night";
        cssStyle.color = 'Yellow'
    }
    return (
        <>
            <h1>Hello Sir, <span style={cssStyle}>{greeting} </span> </h1>
        </>
    )
}
export default Greeting;