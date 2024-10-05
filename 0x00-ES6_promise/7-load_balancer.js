export default function loadBalancer(ChinaDownload,USDownload){
    return Promise.race([ChinaDownload,USDownload])
}