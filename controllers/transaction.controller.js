const UserModel = require


const transferFunds=async(req, res)=>{
    const {accountNumber, amount, description}.req.body
    const {id}=req.user
    try{
         const receiver= await UserModel.findOne({accountNumber})
    }catch (error){

    }
}