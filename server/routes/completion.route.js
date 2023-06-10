import { Router } from 'express';
import openai from '../config/openAI.js';
const completionRouter = Router();


completionRouter.post('/completion', async (req, res) => {
    try {
        const { content } = req.body;
        // const response = await openai.createChatCompletion({
        //     model: "gpt-3.5-turbo",
        //     messages: [{
        //         role: "user",
        //         content: content
        //     }]
        // });
        // console.log(response.data.choices[0].message.content)
        // const message = {
        //     role: response.data.choices[0].message.role,
        //     content: response.data.choices[0].message.content,
        //     timestamp: new Date()
        // }
        setTimeout(() => {
            const message = {
                role: "assistant",
                content: "Hello, how can I assist",
                timestamp: new Date()
            }
            res.json(message);
        }, 1000)

    } catch (err) {
        console.error(err);

    }
});
export default completionRouter