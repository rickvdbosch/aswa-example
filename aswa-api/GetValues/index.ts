import { AzureFunction, Context, HttpRequest } from '@azure/functions'

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const responseMessage = '["Hello", "world", "from", "TypeScript", "Functions"]';

    context.res = {
        body: responseMessage
    };

};

export default httpTrigger;