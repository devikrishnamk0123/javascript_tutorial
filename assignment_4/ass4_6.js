function getProcessedData(url) {
    return downloadData(url)
    .catch(e => {
             return downloadFallbackData(url)
       })
       .then(value => {
             return processDataInWorker(value) 
       })
}


async function getProcessedData(url){
    try{
        const data = await downloadData(url);
        return processDataInWorker(data);
    }
    catch(e){
        try{
            const msg = await downloadFallbackData(url);
            return processDataInWorker(msg);
        }
        catch(e){
            ;
        }
    }
}
