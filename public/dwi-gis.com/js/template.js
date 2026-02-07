export function popupContent(nama, deskripsi, poin) {
  return `
        <div style="min-width: 200px;">
            <div style="border-bottom: 1px solid #00ff41; padding-bottom: 5px; margin-bottom: 5px;">
                <strong style="color: #00ff41; font-size: 1.1em;">TARGET IDENTIFIED</strong>
            </div>
            <h4 style="margin: 5px 0; color: #fff;">${nama}</h4>
            <p style="margin: 5px 0; font-size: 0.9em; color: #ccc;">${deskripsi}</p>
            <div style="margin-top: 10px; background: rgba(0, 255, 65, 0.1); padding: 5px; text-align: center; border: 1px dashed #00ff41;">
                <span style="color: #00ff41; font-weight: bold;">REWARD: ${poin} PTS</span>
            </div>
            <button onclick="alert('Flag Captured! System updated.')" 
                style="width: 100%; margin-top: 10px; background: #00ff41; color: #000; border: none; padding: 8px; font-weight: bold; cursor: pointer; font-family: 'Roboto Mono';">
                > EXECUTE CAPTURE
            </button>
        </div>
    `;
}
