function batch(image){
    document.dispatchEvent( new CustomEvent('funcIntraLaunch',
    {
        'detail': { task: 'run',
                    program: 'C:/Users/ajvin/Documents/BlinCsinC/src/assets/displayImage.bat', //Change this location!!!
                    switches: image,
                    showerrors: 'true'

        }
    }
    )) 
}