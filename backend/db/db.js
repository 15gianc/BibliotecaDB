import mongoose from "mongoose"; 

const dbConnection = async () =>{ 


    try {

    await    mongoose.connect(process.env.DB_CONNECTION,{ 
        useNewUrlParser:true,
        useUnifiedTopology:true,
        });

        console.log("connection with MongoDB  : ¡Successful!");
    
} catch (e) {
    console.log("Error connecting  MongoDB : \n " + e);
}
};

export default { dbConnection };