const errorMiddleWare = (err, req, res, next) =>{
    try {
        let error = { ...err };
        error.message = err.message;
        console.log(err);
        
        //mongoose bag objectId
        if(err.name === 'CastError'){
            const msg = 'Resource not found';
            error = new Error(msg)
            error.statusCode = 404;
        }

        //mongoose duplicate key
        if(err.code === 11000){
            const msg = 'Duplicate key value entered';
            error = new Error(msg)
            error.statusCode = 400;
        }

        //mongoose validation error
        if(err.name === 'ValidationError'){
            const msg = Object.values(err.errors).map(val => val.message);
            error = new Error(msg.join(', '));
            error.statusCode = 400;
        }

        res.status(error.statusCode ||  500).json({ success: false, error: error.message || "Server Error"});

    } catch (error) {
        next(error)
    }
}

export default errorMiddleWare;