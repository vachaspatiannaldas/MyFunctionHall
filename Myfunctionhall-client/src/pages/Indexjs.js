import React from 'react';

const Indexjs = () => {
    function AddScript(path) {
        const script = document.createElement('script');
        script.src = path;
        script.async = true;
        document.body.appendChild(script);
    }

    React.useEffect(() => {
        AddScript('/JS/jquery-3.3.1.min.js');
        AddScript('/JS/bootstrap.min.js');
        AddScript('/JS/jquery.nice-select.min.js');
        AddScript('/JS/jquery-ui.min.js');
        AddScript('/JS/jquery.slicknav.js');
        AddScript('/JS/mixitup.min.js');
        AddScript('/JS/owl.carousel.min.js');
        AddScript('/JS/main.js');
    }, []);

    return null; 
}

export default Indexjs;
