function Hamburger({color="#6B7280"}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
            <path fill={color}
                d="M23 19l.02.096c.379 1.918-.564 3.894-3.02 3.904-4.611.019-11.389 0-16 0-2.492 0-3.348-1.976-3-4h22zm-1-1h-20c-1.104 0-2-.896-2-2s.896-2 2-2h4.481c2.37.017 2.852 2.006 4.019 2 1.167-.006 1.781-1.976 3.965-2h7.535c1.104 0 2 .896 2 2s-.896 2-2 2zm-3.978-4.751c-.677 0-1.293-.308-1.837-.579-1.12-.557-1.212-.558-2.333 0-.543.271-1.159.579-1.837.579-.679 0-1.294-.308-1.838-.579-1.117-.557-1.214-.558-2.332 0-.544.271-1.159.579-1.838.579-.677 0-1.294-.308-1.837-.579-1.002-.499-1.472-.756-2.952.415-.143.114-.304.165-.462.165-.39 0-.756-.312-.756-.751 0-.219.096-.437.282-.584 2.08-1.661 3.239-1.244 4.559-.585.434.216.843.42 1.166.42.324 0 .734-.204 1.166-.42 1.543-.769 2.12-.776 3.676 0 .433.216.843.42 1.166.42.323 0 .733-.204 1.166-.42 1.543-.769 2.119-.776 3.675 0 .435.216.843.42 1.166.42.324 0 .732-.204 1.167-.42 1.301-.649 2.474-1.09 4.536.59.181.148.275.363.275.579 0 .412-.333.749-.751.749-.166 0-.334-.055-.475-.168-1.437-1.168-1.913-.909-2.914-.41-.544.271-1.16.579-1.838.579zm4.978-3.249h-22c0-4.967 4.377-9 11-9s11 4.033 11 9zm-15.5-5c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm4 0c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm4 0c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm4 0c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm-11-2c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm-3 1c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm9-1c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm3 0c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm-6-1c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5z" />
        </svg>
    )
}
function Menu({color="#6B7280"}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
            <path fill={color}
                d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
        </svg>
    )
}
function Cancel({ color }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" >
            <path fill={color}
                d="M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z" />
        </svg>
    )
}


export { Hamburger, Menu, Cancel };