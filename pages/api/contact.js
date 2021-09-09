// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { setMongoCxn, insertOne } from "../../utils/db-utils";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };
    console.log(newMessage);
    let client;
    try {
      client = await setMongoCxn();
    } catch (error) {
      res.status(500).json({message:error.message || 'Could not connect to MongoDb'})
      return;
    }

    let result;
    try {
      result = await insertOne(client, 'message', newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      res.status(500).json({message:error.message || 'Something went wrong storing data'})
      return;
    }
    
    
    res.status(201).json({ message: "Successfully stored", data: result });
  }
}
