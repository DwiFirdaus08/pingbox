export function popupContent(nama, deskripsi, poin) {
  return `
        <div style="font-family: Arial, sans-serif; min-width: 150px;">
            <h3 style="margin: 0; color: #d63031;">🚩 ${nama}</h3>
            <p style="margin: 5px 0;">${deskripsi}</p>
            <hr>
            <b style="color: #0984e3;">Poin: ${poin}</b>
            <button onclick="alert('Flag Found!')" style="display:block; margin-top:10px; padding:5px; width:100%; cursor:pointer;">Capture Flag</button>
        </div>
    `;
}
