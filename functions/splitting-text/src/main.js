import { getSplitting } from './getSplitting.js';

// This Appwrite function will be executed every time your function is triggered
export default async ({ req, res, log, error }) => {

  const query = req.query;
  const address = query.address || "../summary.txt";

  try{
    const docs = await getSplitting(address);
    // log(docs)
    return res.json({
      success:true,
      data:docs
    })


  }catch(e){
    error(e)

    return res.json({
      success:false
    })
  }
};
