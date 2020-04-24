function batch(image){
    document.dispatchEvent( new CustomEvent('funcIntraLaunch',
    {
        'detail': { task: 'run',
                    program: 'C:/Users/ajvin/Documents/BlinCsinC/src/assets/displayImage.bat', //Change this location!!!
                    switches: image,
                    windowstate: 'HIDE',
                    showerrors: 'true'

        }
    }
    )) 
}

function movePCtoRP(image){
    document.dispatchEvent( new CustomEvent('funcIntraLaunch',
    {
        'detail': { task: 'run',
                    program: 'C:/Users/ajvin/Documents/BlinCsinC/src/assets/movePicturestoRP.bat', //Change this location!!!
                    switches: image,
                    windowstate: 'HIDE',
                    showerrors: 'true'

        }
    }
    )) 
}

function moveRPtoPC(){
    document.dispatchEvent( new CustomEvent('funcIntraLaunch',
    {
        'detail': { task: 'run',
                    program: 'C:/Users/ajvin/Documents/BlinCsinC/src/assets/movePicturestoPC.bat', //Change this location!!!
                    //switches: image,
                    windowstate: 'HIDE',
                    showerrors: 'false'

        }
    }
    )) 
}
