
/**
 * Get barcode from server and display it on a paragraph.
 */
const GetBarcode = () => {

    let url = "http://localhost:7033/api/barcodes";
    let settings = {method: 'get'};
    
    fetch(url, settings)
    .then((res) => res.json())
    .then((res) => {
        let barcodeParagraph = document.getElementById("barcode");
        barcodeParagraph.textContent = JSON.stringify(res.data);
    })
    .catch((err) => {
        console.log(err);
    });

};

document.getElementById("btnBackend").onclick = () => {
    GetBarcode();
}