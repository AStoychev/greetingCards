export const copyOnClickId = (orderId) => {
    let id = orderId;
    let html =
        <div style={{ color: 'green', fontSize: '13px', fontWeight: 'bold' }}>
            <img style={{ width: "25px" }} src='../../../images/checkmark.png' alt='checkmark' />
        </div>
    // setTimeout(() => {
    //     setCopyMessage('Copy ID')
    // }, 3000);
    navigator.clipboard.writeText(orderId);
    return [id, html]
}