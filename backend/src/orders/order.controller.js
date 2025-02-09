const Order=require('./orders')

const createOrder=async(req,res)=>{
    try {
        const newOrder= await Order(req.body)
        const saveorder= await newOrder.save();
        res.status(200).json(saveorder);
    } catch (error) {
        console.error("Error creating order",error);
        res.status(500).json({message:"Failed to create order"})
    }
}

const getOrder=async(req,res)=>{
    try {
        const {email}=req.params;
        const orders=await Order.find({email}).sort({createdAt:-1});
        if(!orders) return res.status(404).json({message:"not found"})

        res.status(200).json(orders);
    } catch (error) {
        console.error("Error fetching order",error);
        res.status(500).json({message:"Failed to fetch order"})
    }
}

module.exports={
  createOrder,
  getOrder
}