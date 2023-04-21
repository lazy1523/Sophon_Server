import { Injectable } from "@nestjs/common";
import { Configuration, OpenAIApi } from "openai";

@Injectable()
export class ChatGPTService {
    private openai: OpenAIApi;
    constructor() {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });
        this.openai = new OpenAIApi(configuration);
    }
    
    /**
     * 通过OpenAI GPT-3 分析用户关键词
     */
    public async getKeywords(text: string) {
        try{
            const completion = await this.openai.createCompletion({
                model: "text-davinci-003",
                prompt: this.generateKeywordsPrompt(text),
                temperature: 0.6,
              });
            const keywords = completion.data.choices[0].text;
            return keywords;
        }catch (error) {
            console.log(error);
        }
    }

    /**
     * 通过OpenAI GPT-3 分析Dune的数据
     */
    


    /**
     * 生成关键词Prompt
     */
    private generateKeywordsPrompt(text: string) {
        const keywords = text[0].toUpperCase() + text.slice(1).toLowerCase();
        return keywords;
    }


}